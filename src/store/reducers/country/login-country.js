import { COUNTRY } from "../../actions";

const loginCountryReducer = (state = {}, action) => {
  switch (action.type) {
    case COUNTRY.CLEAR:
      return {};
    case COUNTRY.LOGIN_COUNTRY:
      return action.loginCountry;
    default:
      return state;
  }
};

export default loginCountryReducer;
