import { call, takeEvery, put, select } from "redux-saga/effects";
import { isEmpty, sortBy, uniqBy } from "lodash";
import { COMPANY, setCompanyError, setCompanyList, loadFolder, setSelectedCompany, setSelectedFolder } from "../actions";
import { apiFetchCompany } from "../../api";

const getSelectedCompany = state => state.company.selectedCompany;

function* handleCompanyLoad() {
  try {
    let selectedCompany = yield select(getSelectedCompany);
    const response = yield call(apiFetchCompany);
    const uniqCompanyList = uniqBy(response, "companyID");
    const companyList = sortBy(uniqCompanyList, data => data.name.toLowerCase());
    if (isEmpty(selectedCompany)) {
      selectedCompany = companyList[0];
    } else {
      const companyExist = companyList.filter(company => company.companyID === selectedCompany.companyID);
      selectedCompany = !!companyExist.length ? selectedCompany : companyList[0];
    }
    yield put(setSelectedCompany(selectedCompany));
    yield put(setCompanyList(companyList));
  } catch (error) {
    yield put(setCompanyError(error.toString()));
  }
}

function* handleCompanyChange() {
  try {
    const selectedCompany = yield select(getSelectedCompany);
    yield put(loadFolder());
    yield put(setSelectedFolder(selectedCompany.companyID));
  } catch (error) {
    yield put(setCompanyError(error.toString()));
  }
}

export function* watchCompanyLoad() {
  yield takeEvery(COMPANY.LOAD, handleCompanyLoad);
}

export function* watchCompanyChange() {
  yield takeEvery(COMPANY.SELECTED_COMPANY, handleCompanyChange);
}
