import { combineReducers } from "redux";
import loadingReducer from "./loading";
import imageloadingReducer from "./imageLoading";
import errorReducer from "./error";
import dataReducer from "./data";
import loginStatusReducer from "./login-status";
import authTokenReducer from "./auth-token";
import otpReducer from "./login-otp";
import numberReducer from "./login-number";
import otpSuccessReducer from "./otp-success";
import otpSentReducer from "./otp-sent";
import countryReducer from "./active-country";
import editUserReducer from "./edit-user";
import profileImageReducer from "./profile-image";
import selectedTextReducer from './selected-text';

const authReducers = combineReducers({
  isLoading: loadingReducer,
  isImageLoading: imageloadingReducer,
  error: errorReducer,
  data: dataReducer,
  isLoggedIn: loginStatusReducer,
  token: authTokenReducer,
  otp: otpReducer,
  number: numberReducer,
  otpSuccess: otpSuccessReducer,
  otpSent: otpSentReducer,
  activeCountry: countryReducer,
  editUser: editUserReducer,
  profileImage: profileImageReducer,
  selectedText:selectedTextReducer,
});

export { authReducers };
