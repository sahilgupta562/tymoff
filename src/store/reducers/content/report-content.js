import { CONTENT } from "../../actions";

const reportContentReducer = (state = 0, action) => {
  switch (action.type) {
    case CONTENT.CLEAR:
      return 0;
    case CONTENT.SET_REPORT_CONTENT_ID:
      return action.reportId;
    default:
      return state;
  }
};

export default reportContentReducer;
