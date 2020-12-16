import { MASTER } from "../../actions";

const formatReducer = (state = [], action) => {
  switch (action.type) {
    case MASTER.CLEAR:
      return [];
    case MASTER.LOAD_FORMAT:
      return action.formats;
    default:
      return state;
  }
};

export default formatReducer;
