import { CONTENT } from "../../actions";

const totalContentReducer = (state = 0, action) => {
  switch (action.type) {
    case CONTENT.CLEAR:
      return 0;
    case CONTENT.TOTAL_CONTENT_COUNT:
      return action.totalContent;
    default:
      return state;
  }
};

export default totalContentReducer;
