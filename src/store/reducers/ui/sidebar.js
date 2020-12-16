import { UI } from "../../actions";

const sidebarReducer = (state = true, action) => {
  switch (action.type) {
    case UI.OPEN_SIDEBAR:
      return true;
    case UI.CLOSE_SIDEBAR:
      return false;
    default:
      return state;
  }
};

export default sidebarReducer;
