import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as LanguageModal } from "./language-modal";
import {
  openModal,
  closeModal,
  getSelectedLanguages,
  setFilterLanguage,
  setUploadLanguage,
  setFilter
} from "../../../../store";

const mapStateToProps = state => ({
  modal: state.ui.modal.language || false,
  isModalRoute: state.ui.isModalRoute,
  languages: state.master.languages,
  modalAction: state.ui.modalAction,
  filter: state.content.filter,
  selectedLanguages: getSelectedLanguages(state)
});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  closeModal: modal => dispatch(closeModal(modal)),
  setFilterLanguage: languageId => dispatch(setFilterLanguage(languageId)),
  setUploadLanguage: languageId => dispatch(setUploadLanguage(languageId)),
  setFilter: filter => dispatch(setFilter(filter))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LanguageModal)
);
