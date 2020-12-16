import { CONTENT } from "../../actions";
import { findIndex, uniqBy } from "lodash";

const dataReducer = (state = [], action) => {
  switch (action.type) {
    case CONTENT.CLEAR:
      return [];
    case CONTENT.LOAD_SUCCESS:
      const contents = [...state, ...action.contents];
      return uniqBy(contents, "id");
    case CONTENT.ACTIVE_CONTENT: {
      const contents = [...state];
      const data = action.activeContent;
      if (!!contents.length) {
        const index = findIndex(contents, { id: data.id });
        contents.splice(index, 1, { ...contents[index], ...data });
      } else {
        contents.push(data);
      }
      return contents;
    }
    case CONTENT.REFRESH_CONTENT:
      return [...action.contents];
    default:
      return state;
  }
};

export default dataReducer;
