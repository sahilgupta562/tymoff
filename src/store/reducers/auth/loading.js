import { AUTH, UI } from "../../actions";

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case AUTH.LOAD:
    case AUTH.SEND_OTP:
    case AUTH.VALIDATE_OTP:
    case AUTH.UPDATE_PROFILE:
    case AUTH.CHANGE_PROFILE_IMAGE:
    case AUTH.LOAD_USER_PROFILE:
      return true;
    case AUTH.LOAD_SUCCESS:
    case AUTH.LOAD_FAILED:
    case AUTH.OTP_SENT:
    case AUTH.OTP_SUCCESS:
    case AUTH.REFRESH_AUTH:
    case UI.CLOSE_MODAL:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
