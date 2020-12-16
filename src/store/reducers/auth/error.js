import { AUTH } from "../../actions";

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case AUTH.LOAD:
    case AUTH.SEND_OTP:
    case AUTH.SET_NUMBER:
    case AUTH.OTP_SENT:
    case AUTH.SET_COUNTRY:
    case AUTH.VALIDATE_OTP:
    case AUTH.EDIT_USER_INFO:
    case AUTH.UPDATE_PROFILE:
      return null;
    case AUTH.LOAD_FAILED:
      return action.error;
    case AUTH.CLEAR:
    case AUTH.CLEAR_LOGIN:
      return null;
    default:
      return state;
  }
};

export default errorReducer;
