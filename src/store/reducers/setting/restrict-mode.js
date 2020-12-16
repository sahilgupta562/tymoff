import { SETTING } from "../../actions";

const restrictedModeReducer = (state = false, action) => {
  switch (action.type) {
    case SETTING.CLEAR:
    case SETTING.DISABLE_RESTRICTED_MODE:
      return false;
    case SETTING.ENABLE_RESTRICTED_MODE:
      return true;
    default:
      return state;
  }
};

export default restrictedModeReducer;
