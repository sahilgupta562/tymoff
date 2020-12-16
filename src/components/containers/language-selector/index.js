import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as LanguageSelector } from "./language-selector";
import { openModal, closeModal, getSelectedLanguages, setFilterLanguage, setUploadLanguage, setFilter, validateUploadLanguage, listSearchedLanguages, setSearchLanguage } from "../../../store";

const mapStateToProps = state => ({
  modal: state.ui.modal.language || false,
  isModalRoute: state.ui.isModalRoute,
  languages: listSearchedLanguages(state),
  modalAction: state.ui.modalAction,
  filter: state.content.filter,
  selectedLanguages: getSelectedLanguages(state),
  error: state.upload.error,
  searchLanguage: state.language.searchLanguage,
  activeStep: state.upload.activeStep,
});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  closeModal: modal => dispatch(closeModal(modal)),
  setFilterLanguage: languageId => dispatch(setFilterLanguage(languageId)),
  setUploadLanguage: languageId => dispatch(setUploadLanguage(languageId)),
  setFilter: filter => dispatch(setFilter(filter)),
  setSearchLanguage: searchText => dispatch(setSearchLanguage(searchText)),
  validateUploadLanguage: () => dispatch(validateUploadLanguage())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LanguageSelector));
