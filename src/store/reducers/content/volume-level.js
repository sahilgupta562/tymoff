import { CONTENT } from "../../actions";

const volumeLevel = (state = 0.2, action) => {
  switch (action.type) {
    case CONTENT.CHANGE_VOLUME:
      return action.value;
    default:
      return state;
  }
};

export default volumeLevel;
