import { UI } from "../../actions";

const alertActionReducer = (state = {}, action) => {
  switch (action.type) {
    case UI.ALERT_ACTION:
      return action.alertAction;
    default:
      return state;
  }
};

export default alertActionReducer;
