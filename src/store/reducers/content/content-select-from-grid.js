import { CONTENT } from "../../actions";

const loadFromGridReducer = (state = false, action) => {
  switch (action.type) {
    case CONTENT.CLEAR:
      return false;
    case CONTENT.CONTENT_LOAD_FROM_GRID:
      return true;
    default:
      return state;
  }
};

export default loadFromGridReducer;
