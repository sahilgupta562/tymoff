import { CONTENT } from "../../actions";
import { FilterObject } from "../../../constant";
import { cloneDeep } from "lodash";

const filterReducer = (state = cloneDeep(FilterObject), action) => {
  switch (action.type) {
    case CONTENT.FILTER_RESET:
      return cloneDeep(FilterObject);
    case CONTENT.DISCOVER_FILTER_RESET: {
      const filter = cloneDeep(FilterObject);
      return { ...filter, discoverId: action.discoverId };
    }
    case CONTENT.FILTER_CHANGE:
    case CONTENT.CUSTOM_FILTER_CHANGE:
      return action.filter;
    default:
      return state;
  }
};

export default filterReducer;
