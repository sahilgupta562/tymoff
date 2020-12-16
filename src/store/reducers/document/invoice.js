import { DOCUMENT } from "../../actions";

const invoiceReducer = (state = [], action) => {
  switch (action.type) {
    case DOCUMENT.CLEAR:
      return [];
    case DOCUMENT.DOCUMENT_INVOICE:
      return [...(action.invoices|| [])];
    default:
      return state;
  }
};

export default invoiceReducer;
