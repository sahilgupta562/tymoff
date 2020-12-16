import { CONTENT } from "../../actions";

const pageReducer = (state = 0, action) => {
  switch (action.type) {
    case CONTENT.PAGE_RESET:
      return 0;
    case CONTENT.PAGE_CHANGE:
      return action.currentPage;
    default:
      return state;
  }
};

export default pageReducer;
