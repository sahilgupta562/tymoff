import { SETTING } from "../../actions";

const currentScrollTimeReducer = (state = 0, action) => {
  switch (action.type) {
    case SETTING.CLEAR:
      return 0;
    case SETTING.SET_SCROLL_TIME:
      return action.currentScrollTime;
    default:
      return state;
  }
};

export default currentScrollTimeReducer;
