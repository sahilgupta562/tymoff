import { CONTENT } from "../../actions";

const initialSlideReducer = (state = -1, action) => {
  switch (action.type) {
    case CONTENT.RESET_ACTIVE_CONTENT:
      return -1;
    case CONTENT.LOAD_CONTENT_DETAIL:
      return 0;
    case CONTENT.INITIAL_SLIDE:
      return action.initialSlide;
    default:
      return state;
  }
};

export default initialSlideReducer;
