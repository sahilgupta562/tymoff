import { AUTH } from "../../actions";

const otpSentReducer = (state = false, action) => {
  switch (action.type) {
    case AUTH.CLEAR_LOGIN:
    case AUTH.LOAD_SUCCESS:
      return false;
    case AUTH.OTP_SENT:
      return true;
    default:
      return state;
  }
};

export default otpSentReducer;
