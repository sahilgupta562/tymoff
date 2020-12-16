import { UI } from "../../actions";

const fileContextMenuPositionReducer = (state = { mouseX: 0, mouseY: 0 }, action) => {
  switch (action.type) {
    case UI.SET_FILE_CONTEXT_POSITION:
      return action.position;
    default:
      return state;
  }
};

export default fileContextMenuPositionReducer;
