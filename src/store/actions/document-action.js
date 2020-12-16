import { DOCUMENT } from "./action-types";

const loadDocument = () => ({
  type: DOCUMENT.LOAD
});

const clearDocument = () => ({
  type: DOCUMENT.CLEAR
});

const documentLoadSuccess = () => ({
  type: DOCUMENT.LOAD_SUCCESS
});

const setInvoiceDocument = invoices => ({
  type: DOCUMENT.DOCUMENT_INVOICE,
  invoices
});

const setReceiptDocument = receipts => ({
  type: DOCUMENT.DOCUMENT_RECEIPT,
  receipts
});

const setCreditNoteDocument = creditNotes => ({
  type: DOCUMENT.DOCUMENT_CREDIT_NOTE,
  creditNotes
});

const setDebitNoteDocument = debitNotes => ({
  type: DOCUMENT.DOCUMENT_DEBIT_NOTE,
  debitNotes
});

const setImportPermitDocument = importPermits => ({
  type: DOCUMENT.DOCUMENT_IMPORT_PERMIT,
  importPermits
});

export { loadDocument, clearDocument, setInvoiceDocument, setReceiptDocument, setCreditNoteDocument, setDebitNoteDocument, setImportPermitDocument, documentLoadSuccess };
