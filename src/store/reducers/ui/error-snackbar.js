import { UI } from "../../actions";

const errorSnackbarReducer = (state = false, action) => {
  switch (action.type) {
    case UI.OPEN_ERROR_SNACKBAR:
      return true;
    case UI.CLOSE_ERROR_SNACKBAR:
      return false;
    default:
      return state;
  }
};

export default errorSnackbarReducer;
