import { UI } from "../../actions";

const modalReducer = (state = {}, action) => {
  switch (action.type) {
    case UI.OPEN_MODAL:
      return {
        ...state,
        [action.modal]: true
      };
    case UI.CLOSE_MODAL:
      return {
        ...state,
        [action.modal]: false
      };
    default:
      return state;
  }
};

export default modalReducer;
