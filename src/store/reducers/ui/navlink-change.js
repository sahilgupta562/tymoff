import { UI } from "../../actions";

const navlinkChangeReducer = (state = false, action) => {
  switch (action.type) {
    case UI.NAVLINK_CHANGE:
      return true;
    default:
      return state;
  }
};

export default navlinkChangeReducer;
