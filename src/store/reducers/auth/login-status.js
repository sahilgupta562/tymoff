import { AUTH } from "../../actions";

const loginStatusReducer = (state = false, action) => {
  switch (action.type) {
    case AUTH.LOAD_SUCCESS:
      return true;
    case AUTH.CLEAR:
      return false;
    default:
      return state;
  }
};

export default loginStatusReducer;
