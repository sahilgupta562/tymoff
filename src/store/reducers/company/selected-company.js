import { COMPANY } from "../../actions";

const selectedCompanyReducer = (state = {}, action) => {
  switch (action.type) {
    case COMPANY.CLEAR:
      return {};
    case COMPANY.SELECTED_COMPANY:
      return action.selectedCompany;
    default:
      return state;
  }
};

export default selectedCompanyReducer;
