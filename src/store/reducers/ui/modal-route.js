import { UI } from "../../actions";

const modalRouteReducer = (state = false, action) => {
  switch (action.type) {
    case UI.MODAL_ROUTE:
      return true;
    default:
      return state;
  }
};

export default modalRouteReducer;
