import { MOVE_FOLDER } from "../../../actions";

const selectedNodesReducer = (state = "", action) => {
  switch (action.type) {
    case MOVE_FOLDER.CLEAR:
      return [];
    case MOVE_FOLDER.SET_FOLDER_NODES:
      return [...(action.selectedNodes || [])];
    default:
      return state;
  }
};

export default selectedNodesReducer;
