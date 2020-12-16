import { AUTH } from "./action-types";

const loadAuth = () => ({
  type: AUTH.LOAD
});

const sendOtp = () => ({
  type: AUTH.SEND_OTP
});

const validateOtp = () => ({
  type: AUTH.VALIDATE_OTP
});

const setAuth = user => ({
  type: AUTH.LOAD_SUCCESS,
  user
});

const updateAuth = user => ({
  type: AUTH.REFRESH_AUTH,
  user
});

const setAuthError = error => ({
  type: AUTH.LOAD_FAILED,
  error
});

const setLoginNumber = number => ({
  type: AUTH.SET_NUMBER,
  number
});

const setCountryOnLogin = country => ({
  type: AUTH.SET_COUNTRY,
  country
});

const setOtp = otp => ({
  type: AUTH.SET_OTP,
  otp
});

const setOtpSuccess = () => ({
  type: AUTH.OTP_SUCCESS
});

const setOtpSent = () => ({
  type: AUTH.OTP_SENT
});

const clearLogin = () => ({
  type: AUTH.CLEAR_LOGIN
});

const clearAuth = () => ({
  type: AUTH.CLEAR
});

const editUserInfo = user => ({
  type: AUTH.EDIT_USER_INFO,
  user
});

const updateProfile = () => ({
  type: AUTH.UPDATE_PROFILE
});

const updateProfileImage = profileImage => ({
  type: AUTH.CHANGE_PROFILE_IMAGE,
  profileImage
});

const removeProfileImage = () => ({
  type: AUTH.REMOVE_PROFILE_IMAGE
});

const refreshUserProfile = () => ({
  type: AUTH.LOAD_USER_PROFILE
});

const showSelectedText = text => ({
  type: AUTH.NON_LOGIN_SELECTED_TEXT,
  text
});

const clearSelectedText = () => ({
  type: AUTH.CLEAR_SELECTED_TEXT
})

export {
  loadAuth,
  setAuth,
  setAuthError,
  setLoginNumber,
  setOtp,
  setOtpSuccess,
  setOtpSent,
  clearLogin,
  sendOtp,
  setCountryOnLogin,
  validateOtp,
  clearAuth,
  editUserInfo,
  updateProfile,
  updateAuth,
  updateProfileImage,
  removeProfileImage,
  refreshUserProfile,
  showSelectedText,
  clearSelectedText
};
