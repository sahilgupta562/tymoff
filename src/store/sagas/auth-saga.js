/* eslint-disable */
import { takeEvery, put, select, call } from "redux-saga/effects";
import { push } from "react-router-redux";
import {
  AUTH,
  setAuthError,
  loadUserDiscoverList,
  clearFilter,
  setOtpSent,
  setAuth,
  closeModal,
  loadNotification,
  updateAuth,
  enableRestrictedMode,
  disableRestrictedMode,
  setMessage,
  setErrorMessage
} from "../actions";
import { ModalType, SuccessMessage, ErrorMessage } from "../../constant";
import { sendOtpInfo } from "../../core";
import { apiSendOtp, apiValidateOtp, apiUpdateProfile, apiUpdateProfileImage, apiRemoveProfileImage, apiGetUserProfile } from "../../api";

const getNumber = state => state.auth.number;
const getOtp = state => state.auth.otp;
const getIsModalRoute = state => state.ui.isModalRoute;
const getActiveCountry = state => state.auth.activeCountry;
const getEditUser = state => state.auth.editUser;
const getToken = state => state.auth.token;
const getProfileImage = state => state.auth.profileImage;
const getUser = state => state.auth.data;
const getIsContentDetailOpen = state => state.content.isContentDetailOpen;

function* handleAuthSuccess() {
  try {
    const isContentDetailOpen = yield select(getIsContentDetailOpen);
    const user = yield select(getUser);
    user.isAdultContentHide ? yield put(enableRestrictedMode()) : yield put(disableRestrictedMode());
    yield put(loadUserDiscoverList());
    yield put(loadNotification());
    if (!isContentDetailOpen) yield put(clearFilter());
  } catch (error) {
    yield put(setAuthError(error.toString()));
  }
}

function* handleSendOtp() {
  try {
    const number = yield select(getNumber);
    const activeCountry = yield select(getActiveCountry);
    if (number && !!activeCountry.countryCode) {
      const data = sendOtpInfo(number, activeCountry.countryCode);
      const response = yield call(apiSendOtp, data);
      if (response && response.success) {
        yield put(setOtpSent());
      } else {
        yield put(setAuthError(response ? response.message : "error in sending otp"));
      }
    } else {
      if (!number) yield put(setAuthError("enter mobile number"));
      if (!!!activeCountry.countryCode) yield put(setAuthError("select country"));
    }
  } catch (error) {
    yield put(setAuthError(error.toString()));
  }
}

function* handleValidateOtp() {
  try {
    const otp = yield select(getOtp);
    const phone = yield select(getNumber);
    const isModalRoute = yield select(getIsModalRoute);
    if (phone && otp) {
      const response = yield call(apiValidateOtp, { otp, phone });
      yield put(setAuth(response.data));
      yield put(closeModal(ModalType.LOGIN));
      if (isModalRoute) yield put(push("/"));
    } else {
      if (!phone) yield put(setAuthError("enter mobile number"));
      if (!otp) yield put(setAuthError("enter otp"));
    }
  } catch (error) {
    yield put(setAuthError(error.message));
  }
}

function* handleUpdateProfile() {
  try {
    const data = yield select(getEditUser);
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (data.email && !emailRegex.test(data.email)) {
      yield put(setAuthError("Invalid email"));
    } else {
      const token = yield select(getToken);
      const response = yield call(apiUpdateProfile, data, token);
      if (response.success) {
        yield put(closeModal(ModalType.EDIT_PROFILE));
        yield put(updateAuth(response.data));
        yield put(setMessage(SuccessMessage.PROFILE_UPDATED));
      }
      else{
        yield put(setAuthError(response.message));
        yield put(setErrorMessage(ErrorMessage.API_RESPONSE_ERROR));
      }
    }
  } catch (error) {
    yield put(setAuthError(error.toString()));
    yield put(setErrorMessage(ErrorMessage.API_RESPONSE_ERROR));
  }
}

function* handleProfileImageChange() {
  try {
    const token = yield select(getToken);
    const profileImage = yield select(getProfileImage);
    let form = new FormData();
    form.append("image", profileImage);
    const response = yield call(apiUpdateProfileImage, form, token);
    if (response.success) {
      yield put(setMessage(SuccessMessage.PROFILE_IMAGE_UPDATED));
      yield put(updateAuth(response.data));
    }
  } catch (error) {
    yield put(setAuthError(error.toString()));
    yield put(setErrorMessage(ErrorMessage.API_RESPONSE_ERROR));
  }
}

function* handleRemoveProfile() {
  try {
    const token = yield select(getToken);
    const user = yield select(getUser);
    const response = yield call(apiRemoveProfileImage, token);
    if (response.success) {
      yield put(updateAuth({ ...user, picUrl: "" }));
      yield put(setMessage(SuccessMessage.REMOVE_PROFILE_IMAGE));
    }
  } catch (error) {
    yield put(setAuthError(error.toString()));
    yield put(setErrorMessage(ErrorMessage.API_RESPONSE_ERROR));
  }
}

function* handleRefreshProfile() {
  try {
    const token = yield select(getToken);
    const response = yield call(apiGetUserProfile, token);
    if (response.success) {
      yield put(updateAuth(response.data));
    }
  } catch (error) {
    yield put(setAuthError(error.toString()));
    yield put(setErrorMessage(ErrorMessage.API_RESPONSE_ERROR));
  }
}

export function* watchAuthSuccess() {
  yield takeEvery(AUTH.LOAD_SUCCESS, handleAuthSuccess);
}

export function* watchRefreshProfile() {
  yield takeEvery(AUTH.LOAD_USER_PROFILE, handleRefreshProfile);
}

export function* watchSendOtp() {
  yield takeEvery(AUTH.SEND_OTP, handleSendOtp);
}

export function* watchValidateOtp() {
  yield takeEvery(AUTH.VALIDATE_OTP, handleValidateOtp);
}

export function* watchUpdateProfile() {
  yield takeEvery(AUTH.UPDATE_PROFILE, handleUpdateProfile);
}

export function* watchChangeProfileImage() {
  yield takeEvery(AUTH.CHANGE_PROFILE_IMAGE, handleProfileImageChange);
}

export function* watchRemoveProfile() {
  yield takeEvery(AUTH.REMOVE_PROFILE_IMAGE, handleRemoveProfile);
}
