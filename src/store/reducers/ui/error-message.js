import { UI } from "../../actions";

const errorMessageReducer = (state = "", action) => {
  switch (action.type) {
    case UI.CLEAR_MASSAGE:
      return "";
    case UI.SET_ERROR_MESSAGE:
      return action.errorMessage;
    default:
      return state;
  }
};

export default errorMessageReducer;
