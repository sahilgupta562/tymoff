import { AUTH } from "../../actions";

const imageLoadingReducer = (state = false, action) => {
  switch (action.type) {
    case AUTH.CHANGE_PROFILE_IMAGE:
      return true;
      case AUTH.REFRESH_AUTH:
      case AUTH.LOAD_FAILED:
      return false;
    default:
      return state;
  }
};

export default imageLoadingReducer;
