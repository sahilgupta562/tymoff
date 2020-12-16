import { AUTH } from "../../actions";

const numberReducer = (state = "", action) => {
  switch (action.type) {
    case AUTH.CLEAR_LOGIN:
    case AUTH.LOAD_SUCCESS:
      return "";
    case AUTH.SET_NUMBER:
      return action.number;
    default:
      return state;
  }
};

export default numberReducer;
