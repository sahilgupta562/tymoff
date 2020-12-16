import { call, takeEvery, put, select } from "redux-saga/effects";
import { DOCUMENT, setInvoiceDocument, setReceiptDocument, setImportPermitDocument, setCreditNoteDocument, setDebitNoteDocument, setFolderError, documentLoadSuccess } from "../actions";
import { apiFetchDocument } from "../../api";
import { DocumentType } from "../../constant";

const getSelectedFolder = state => state.folder.selectedFolder;

function* handleDocumentLoad() {
  try {
    const selectedFolder = yield select(getSelectedFolder);
    const response = yield call(apiFetchDocument, selectedFolder);
    yield put(documentLoadSuccess());
    const invoices = response.filter(x => x.type === DocumentType.INVOICE);
    const receipts = response.filter(x => x.type === DocumentType.RECEIPT);
    const creditNotes = response.filter(x => x.type === DocumentType.CREDIT_NOTE);
    const debitNotes = response.filter(x => x.type === DocumentType.DEBIT_NOTE);
    const importPermits = response.filter(x => x.type === DocumentType.IMPORT_PERMIT);
    yield put(setInvoiceDocument(invoices));
    yield put(setReceiptDocument(receipts));
    yield put(setDebitNoteDocument(debitNotes));
    yield put(setCreditNoteDocument(creditNotes));
    yield put(setImportPermitDocument(importPermits));
  } catch (error) {
    yield put(setFolderError(error.toString()));
  }
}

export function* watchDocumentLoad() {
  yield takeEvery(DOCUMENT.LOAD, handleDocumentLoad);
}
