import { MASTER } from "../../actions";

const reportReducer = (state = [], action) => {
  switch (action.type) {
    case MASTER.CLEAR:
      return [];
    case MASTER.LOAD_REPORT:
      return action.report;
    default:
      return state;
  }
};

export default reportReducer;
