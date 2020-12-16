import { UI } from "../../actions";

const modalActionReducer = (state = "", action) => {
  switch (action.type) {
    case UI.MODAL_ACTION:
      return action.modalAction;
    default:
      return state;
  }
};

export default modalActionReducer;
