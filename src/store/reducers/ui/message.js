import { UI } from "../../actions";

const messageReducer = (state = "", action) => {
  switch (action.type) {
    case UI.CLEAR_MASSAGE:
      return "";
    case UI.SET_MESSAGE:
      return action.message;
    default:
      return state;
  }
};

export default messageReducer;
