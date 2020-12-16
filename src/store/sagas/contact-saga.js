/* eslint-disable */
import { call, put, select, takeEvery } from "redux-saga/effects";
import { CONTACT, setContactError, clearcontact, setErrorMessage } from "../actions";
import { contactData } from "../../core";
import { apiSendContact } from "../../api";
import { setAlertAction } from "../../store";
import { ContactResponseAlert, ErrorMessage } from "../../constant";

const getContactName = (state) => state.contact.name;
const getContactEmail = (state) => state.contact.email;
const getContactMessage = (state) => state.contact.message;

function* handleSendContact() {
  try {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const name = yield select(getContactName);
    const email = yield select(getContactEmail);
    const message = yield select(getContactMessage);
    if (name && email && emailRegex.test(email) && message) {
      const data = contactData(name, email, message);
      const reponse = yield call(apiSendContact, data);
      if (reponse.success) yield put(setAlertAction(ContactResponseAlert));
      yield put(clearcontact());
    } else {
      if (!name) yield put(setContactError("Please enter name"));
      else if (!email) yield put(setContactError("Please enter email"));
      else if (email && !emailRegex.test(email)) yield put(setContactError("Invalid email"));
      else if (!message) yield put(setContactError("Please enter message"));
    }
  } catch (error) {
    yield put(setContactError(error.toString()));
    yield put(setErrorMessage(ErrorMessage.API_RESPONSE_ERROR));
  }
}

export function* watchSendContact() {
  yield takeEvery(CONTACT.SEND_CONTACT, handleSendContact);
}
