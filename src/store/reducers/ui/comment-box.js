import { UI } from "../../actions";

const commentBoxReducer = (state = false, action) => {
  switch (action.type) {
    case UI.SHOW_COMMENT:
      return true;
    case UI.HIDE_COMMENT:
      return false;
    default:
      return state;
  }
};

export default commentBoxReducer;
