import { AUTH } from "../../actions";

const authTokenReducer = (state = "", action) => {
  switch (action.type) {
    case AUTH.CLEAR:
      return "";
    case AUTH.LOAD_SUCCESS:
      return action.user.token;
    default:
      return state;
  }
};

export default authTokenReducer;
