import { COMPANY } from "../../actions";

const errorReducer = (state = "", action) => {
  switch (action.type) {
    case COMPANY.CLEAR:
      return "";
    case COMPANY.LOAD_FAILED:
      return action.error;
    default:
      return state;
  }
};

export default errorReducer;
