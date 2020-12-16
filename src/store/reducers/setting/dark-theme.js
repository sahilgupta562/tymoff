import { SETTING } from "../../actions";

const darkThemeReducer = (state = false, action) => {
  switch (action.type) {
    case SETTING.DISABLE_DARK_THEME:
      return false;
    case SETTING.ENABLE_DARK_THEME:
      return true;
    default:
      return state;
  }
};

export default darkThemeReducer;
