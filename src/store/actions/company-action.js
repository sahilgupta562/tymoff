import { COMPANY } from "./action-types";

const loadCompany = () => ({
  type: COMPANY.LOAD
});

const clearCompany = () => ({
  type: COMPANY.CLEAR
});

const setCompanyList = company => ({
  type: COMPANY.LOAD_SUCCESS,
  company
});

const setCompanyError = error => ({
  type: COMPANY.LOAD_FAILED,
  error
});

const setSelectedCompany = selectedCompany => ({
  type: COMPANY.SELECTED_COMPANY,
  selectedCompany
});

export { loadCompany, clearCompany, setCompanyList, setCompanyError, setSelectedCompany };
