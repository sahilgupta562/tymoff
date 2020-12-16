import { UI } from "../../actions";

const discoverRouteReducer = (state = false, action) => {
  switch (action.type) {
    case UI.RENDER_DISCOVER_ROUTE:
      return true;
    case UI.LEAVE_DISCOVER_ROUTE:
      return false;
    default:
      return state;
  }
};

export default discoverRouteReducer;
