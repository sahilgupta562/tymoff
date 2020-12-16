import { UI } from "../../actions";

const snackbarReducer = (state = false, action) => {
  switch (action.type) {
    case UI.OPEN_SNACKBAR:
      return true;
    case UI.CLOSE_SNACKBAR:
      return false;
    default:
      return state;
  }
};

export default snackbarReducer;
