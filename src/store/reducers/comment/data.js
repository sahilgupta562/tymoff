import { COMMENT } from "../../actions";

const dataReducer = (state = [], action) => {
  switch (action.type) {
    case COMMENT.CLEAR:
      return [];
    case COMMENT.LOAD_SUCCESS:
      return action.comments;
    default:
      return state;
  }
};

export default dataReducer;
