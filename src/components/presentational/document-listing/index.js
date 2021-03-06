import { connect } from "react-redux";
import { default as DocumentListing } from "./document-listing";

const mapStateToProps = state => ({
  invoices: state.document.invoices,
  receipts: state.document.receipts,
  importPermits: state.document.importPermits,
  debitNotes: state.document.debitNotes,
  creditNotes: state.document.creditNotes,
  isLoading: state.document.isLoading
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DocumentListing);
