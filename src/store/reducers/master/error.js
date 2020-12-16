import { MASTER } from "../../actions";

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case MASTER.LOAD:
      return null;
    case MASTER.LOAD_FAILED:
      return action.error;
    case MASTER.CLEAR:
      return null;
    default:
      return state;
  }
};

export default errorReducer;
