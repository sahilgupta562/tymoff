import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as MoveFileFolderModal } from "./move-file-folder-modal";
import { closeModal, setMoveFolder, moveFolder, clearMoveFolder, moveFiles } from "../../../../store";

const mapStateToProps = state => ({
  modal: state.ui.modal.move_file_folder || false,
  folders: state.folder.data,
  selectedCompany: state.company.selectedCompany,
  data: state.forms.moveFolder,
  actionType: state.ui.actionType
});

const mapDispatchToProps = dispatch => ({
  closeModal: modal => dispatch(closeModal(modal)),
  setMoveFolder: folder => dispatch(setMoveFolder(folder)),
  moveFolder: () => dispatch(moveFolder()),
  moveFiles: () => dispatch(moveFiles()),
  clearMoveFolder: () => dispatch(clearMoveFolder())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MoveFileFolderModal));
