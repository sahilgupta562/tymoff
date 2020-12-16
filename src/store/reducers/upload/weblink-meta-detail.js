import { UPLOAD } from "../../actions";

const weblinkMetaDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case UPLOAD.CLEAR:
    case UPLOAD.CLEAR_CONTENT:
      return {};
    case UPLOAD.SET_META_DETAIL:
      return action.meta;
    default:
      return state;
  }
};

export default weblinkMetaDetailReducer;
