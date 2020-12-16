import { UI } from "../../actions";

const installAppReducer = (state = false, action) => {
  switch (action.type) {
    case UI.SHOW_INSTALL_APP:
      return true;
    case UI.HIDE_INSTALL_APP:
      return false;
    default:
      return state;
  }
};

export default installAppReducer;
