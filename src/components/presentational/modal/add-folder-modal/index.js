import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as AddFolderModal } from "./add-folder-modal";
import { closeModal, setAddFolderName, addFolder, clearAddFolder } from "../../../../store";

const mapStateToProps = state => ({
  modal: state.ui.modal.add_folder || false,
  data: state.forms.addFolder
});

const mapDispatchToProps = dispatch => ({
  closeModal: modal => dispatch(closeModal(modal)),
  setAddFolderName: name => dispatch(setAddFolderName(name)),
  addFolder: () => dispatch(addFolder()),
  clearAddFolder: () => dispatch(clearAddFolder())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddFolderModal));
