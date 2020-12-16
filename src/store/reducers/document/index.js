import { combineReducers } from "redux";
import invoiceReducer from "./invoice";
import receiptReducer from "./receipt";
import importPermitReducer from "./import-permit";
import debitNoteReducer from "./debit-note";
import creditNoteReducer from "./credit-note";
import loadingReducer from "./loading";

const documentReducers = combineReducers({
  isLoading: loadingReducer,
  invoices: invoiceReducer,
  receipts: receiptReducer,
  importPermits: importPermitReducer,
  debitNotes: debitNoteReducer,
  creditNotes: creditNoteReducer
});

export { documentReducers };
