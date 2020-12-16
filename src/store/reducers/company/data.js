import { COMPANY } from "../../actions";

const dataReducer = (state = [], action) => {
  switch (action.type) {
    case COMPANY.CLEAR:
      return [];
    case COMPANY.LOAD_SUCCESS:
      return [...(action.company || [])];
    default:
      return state;
  }
};

export default dataReducer;
