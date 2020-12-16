import { DOCUMENT } from "../../actions";

const debitNoteReducer = (state = [], action) => {
  switch (action.type) {
    case DOCUMENT.CLEAR:
      return [];
    case DOCUMENT.DOCUMENT_DEBIT_NOTE:
      return [...(action.debitNotes || [])];
    default:
      return state;
  }
};

export default debitNoteReducer;
