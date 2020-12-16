import { AUTH } from "../../actions";

const dataReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTH.CLEAR:
      return {};
    case AUTH.LOAD_SUCCESS:
      return action.user;
    default:
      return state;
  }
};

export default dataReducer;
