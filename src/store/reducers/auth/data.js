import { AUTH } from "../../actions";

const dataReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTH.CLEAR:
      return {};
    case AUTH.LOAD_SUCCESS:
    case AUTH.REFRESH_AUTH:
      return { ...action.user };
    default:
      return state;
  }
};

export default dataReducer;
