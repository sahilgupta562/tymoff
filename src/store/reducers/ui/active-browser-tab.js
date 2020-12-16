import { UI } from "../../actions";

const activeBrowserTabReducer = (state = true, action) => {
  switch (action.type) {
    case UI.ACTIVE_TAB:
      return true;
    case UI.INACTIVE_TAB:
      return false;
    default:
      return state;
  }
};

export default activeBrowserTabReducer;
