import { AUTH } from "../../actions";

const otpReducer = (state = "", action) => {
  switch (action.type) {
    case AUTH.CLEAR_LOGIN:
    case AUTH.LOAD_SUCCESS:
      return "";
    case AUTH.SET_OTP:
      return action.otp;
    default:
      return state;
  }
};

export default otpReducer;
