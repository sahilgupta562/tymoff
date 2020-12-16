import { connect } from "react-redux";
import { default as Modal } from "./Modal";

const mapStateToProps = state => ({
  deleteFileFolder: state.ui.modal.delete_file_folder || false,
  addFolder: state.ui.modal.add_folder || false,
  moveFileFolder: state.ui.modal.move_file_folder || false,
  renameFolder: state.ui.modal.rename_folder || false,
  uploadFolder: state.ui.modal.upload_folder || false
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
