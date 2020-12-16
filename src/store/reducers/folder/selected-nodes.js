import { FOLDER } from "../../actions";

const selectedNodesReducer = (state = "", action) => {
  switch (action.type) {
    case FOLDER.CLEAR:
      return [];
    case FOLDER.SELECTED_NODES:
      return [...(action.selectedNodes || [])];
    default:
      return state;
  }
};

export default selectedNodesReducer;
