import { AUTH } from "../../actions";
import { EditUserObject } from "../../../constant";
import { cloneDeep } from "lodash";
const editUserReducer = (state = cloneDeep(EditUserObject), action) => {
  switch (action.type) {
    case AUTH.CLEAR:
      return cloneDeep(EditUserObject);
    case AUTH.EDIT_USER_INFO:
      return action.user;
    default:
      return state;
  }
};

export default editUserReducer;
