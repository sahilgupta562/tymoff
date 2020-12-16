import { ADD_FOLDER } from "../../../actions";

const addFolderFormReducer = (state = "", action) => {
  switch (action.type) {
    case ADD_FOLDER.CLEAR:
      return "";
    case ADD_FOLDER.SET_FOLDER_NAME:
      return action.name;
    default:
      return state;
  }
};

export default addFolderFormReducer;
