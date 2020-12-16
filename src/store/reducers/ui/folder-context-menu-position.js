import { UI } from "../../actions";

const folderContextMenuPositionReducer = (state = { mouseX: 0, mouseY: 0 }, action) => {
  switch (action.type) {
    case UI.SET_FOLDER_CONTEXT_POSITION:
      return action.position;
    default:
      return state;
  }
};

export default folderContextMenuPositionReducer;
