import { DOCUMENT } from "../../actions";

const creditNoteReducer = (state = [], action) => {
  switch (action.type) {
    case DOCUMENT.CLEAR:
      return [];
    case DOCUMENT.DOCUMENT_CREDIT_NOTE:
      return [...(action.creditNotes || [])];
    default:
      return state;
  }
};

export default creditNoteReducer;
