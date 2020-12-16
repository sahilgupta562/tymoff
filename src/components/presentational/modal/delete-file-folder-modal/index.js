import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as DeleteFileFolderModal } from "./delete-file-folder-modal";
import { closeModal, deleteFolder } from "../../../../store";

const mapStateToProps = state => ({
  modal: state.ui.modal.delete_file_folder || false,
  selectedFolder: state.folder.selectedFolder,
  data: state.forms.deleteFolder
});

const mapDispatchToProps = dispatch => ({
  closeModal: modal => dispatch(closeModal(modal)),
  deleteFolder: folder => dispatch(deleteFolder(folder))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DeleteFileFolderModal));
