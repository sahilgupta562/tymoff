import { AUTH } from "../../actions";
import { cloneDeep } from "lodash";
const defaultCountry = { countryCode: "IN", callingCode: "+91" };

const countryReducer = (state = cloneDeep(defaultCountry), action) => {
  switch (action.type) {
    case AUTH.CLEAR_LOGIN:
      return cloneDeep(defaultCountry);
    case AUTH.SET_COUNTRY:
      return { ...action.country };
    default:
      return state;
  }
};

export default countryReducer;
