import { UI } from "../../actions";

const actionTypeReducer = (state = "", action) => {
  switch (action.type) {
    case UI.SET_ACTION_TYPE:
      return action.actionType;
    default:
      return state;
  }
};

export default actionTypeReducer;
