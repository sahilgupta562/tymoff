import { FOLDER } from "../../actions";

const dataReducer = (state = [], action) => {
  switch (action.type) {
    case FOLDER.CLEAR:
      return [];
    case FOLDER.LOAD_SUCCESS: {
      const folders = !!action.folder.length ? action.folder.shift().children : [];
      return folders;
    }
    default:
      return state;
  }
};

export default dataReducer;
