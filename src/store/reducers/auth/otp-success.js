import { AUTH } from "../../actions";

const otpSuccessReducer = (state = false, action) => {
  switch (action.type) {
    case AUTH.CLEAR_LOGIN:
      return false;
    case AUTH.OTP_SUCCESS:
      return true;
    default:
      return false;
  }
};

export default otpSuccessReducer;
