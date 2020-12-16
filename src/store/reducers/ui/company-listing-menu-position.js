import { UI } from "../../actions";

const companyListingMenuPositionReducer = (state = { mouseX: 0, mouseY: 0 }, action) => {
  switch (action.type) {
    case UI.SET_COMPANY_LISTING_POSITION:
      return action.position;
    default:
      return state;
  }
};

export default companyListingMenuPositionReducer;
