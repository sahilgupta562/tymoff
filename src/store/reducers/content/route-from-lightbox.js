import { CONTENT } from "../../actions";

const routeFromLightboxReducer = (state = false, action) => {
  switch (action.type) {
    case CONTENT.ROUTE_FROM_LIGHTBOX:
      return true;
    case CONTENT.CLEAR_ROUTE_FROM_LIGHTBOX:
      return false;
    default:
      return state;
  }
};

export default routeFromLightboxReducer;
