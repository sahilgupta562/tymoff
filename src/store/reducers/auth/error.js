import { AUTH } from "../../actions";

const errorReducer = (state = "", action) => {
  switch (action.type) {
    case AUTH.CLEAR:
      return "";
    case AUTH.LOAD_FAILED:
      return action.error;
    default:
      return state;
  }
};

export default errorReducer;
