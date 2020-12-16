import { CONTENT } from "../../actions";

const perPageReducer = (state = 10, action) => {
  switch (action.type) {
    case CONTENT.PER_PAGE_CHANGE:
      return action.itemsPerPage;
    default:
      return state;
  }
};

export default perPageReducer;
