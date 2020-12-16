import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as RenameFolderModal } from "./rename-folder-modal";
import { closeModal, setRenameFolderName, renameFolder, clearRenameFolder } from "../../../../store";

const mapStateToProps = state => ({
  modal: state.ui.modal.rename_folder || false,
  selectedFolder: state.folder.selectedFolder,
  data: state.forms.renameFolder
});

const mapDispatchToProps = dispatch => ({
  closeModal: modal => dispatch(closeModal(modal)),
  setRenameFolderName: name => dispatch(setRenameFolderName(name)),
  renameFolder: () => dispatch(renameFolder()),
  clearRenameFolder: () => dispatch(clearRenameFolder())
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RenameFolderModal));
