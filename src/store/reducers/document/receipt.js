import { DOCUMENT } from "../../actions";

const receiptReducer = (state = [], action) => {
  switch (action.type) {
    case DOCUMENT.CLEAR:
      return [];
    case DOCUMENT.DOCUMENT_RECEIPT:
      return [...(action.receipts || [])];
    default:
      return state;
  }
};

export default receiptReducer;
