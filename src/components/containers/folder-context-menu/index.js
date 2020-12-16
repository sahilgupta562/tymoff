import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as FolderContextMenu } from "./folder-context-menu";
import { closeModal, openModal } from "../../../store";

const mapStateToProps = state => ({
  modal: state.ui.modal.folder_context_menu || false,
  mouseX: state.ui.folderContextMenuPosition.mouseX,
  mouseY: state.ui.folderContextMenuPosition.mouseY
});

const mapDispatchToProps = dispatch => ({
  closeModal: modal => dispatch(closeModal(modal)),
  openModal: modal => dispatch(openModal(modal))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FolderContextMenu));
