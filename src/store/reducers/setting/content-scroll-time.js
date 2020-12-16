import { SETTING } from "../../actions";

const contentScrollTimeReducer = (state = 0, action) => {
  switch (action.type) {
    case SETTING.CLEAR:
      return 0;
    case SETTING.CHANGE_SCROLL_TIME:
      return action.contentScrollTime;
    default:
      return state;
  }
};

export default contentScrollTimeReducer;
