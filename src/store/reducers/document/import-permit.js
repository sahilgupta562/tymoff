import { DOCUMENT } from "../../actions";

const importPermitReducer = (state = [], action) => {
  switch (action.type) {
    case DOCUMENT.CLEAR:
      return [];
    case DOCUMENT.DOCUMENT_IMPORT_PERMIT:
      return [...(action.importPermits || [])];
    default:
      return state;
  }
};

export default importPermitReducer;
