import { CONTENT } from "../../actions";

const totalPageReducer = (state = 0, action) => {
  switch (action.type) {
    case CONTENT.TOTAL_PAGE_RESET:
      return 0;
    case CONTENT.TOTAL_PAGE_CHANGE:
      return action.totalPage;
    default:
      return state;
  }
};

export default totalPageReducer;
