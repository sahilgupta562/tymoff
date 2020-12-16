import { SHARE } from "../../actions";

const dataReducer = (state = "", action) => {
  switch (action.type) {
    case SHARE.CLEAR:
      return "";
    case SHARE.LOAD_SUCCESS:
      return action.link;
    default:
      return state;
  }
};

export default dataReducer;
