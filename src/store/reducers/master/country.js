import { MASTER } from "../../actions";

const countryReducer = (state = [], action) => {
  switch (action.type) {
    case MASTER.CLEAR:
      return [];
    case MASTER.LOAD_COUNTRY:
      return action.countries;
    default:
      return state;
  }
};

export default countryReducer;
