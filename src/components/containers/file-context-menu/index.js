import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as FileContextMenu } from "./file-context-menu";
import { closeModal, openModal } from "../../../store";

const mapStateToProps = state => ({ modal: state.ui.modal.file_context_menu || false, mouseX: state.ui.fileContextMenuPosition.mouseX, mouseY: state.ui.fileContextMenuPosition.mouseY });

const mapDispatchToProps = dispatch => ({
  closeModal: modal => dispatch(closeModal(modal)),
  openModal: modal => dispatch(openModal(modal))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FileContextMenu));
