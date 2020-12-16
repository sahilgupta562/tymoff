import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as FolderView } from "./folder-view";
import { openModal, setSelectedFolder, setFolderContextMenuPosition, setActionType } from "../../../store";

const mapStateToProps = state => ({
  folders: state.folder.data,
  selectedCompany: state.company.selectedCompany,
  selectedFolder: state.folder.selectedFolder,
  selectedNodes: state.folder.selectedNodes,
  isLoading: state.folder.isLoading
});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  setActionType: actionType => dispatch(setActionType(actionType)),
  setSelectedFolder: folder => dispatch(setSelectedFolder(folder)),
  setFolderContextMenuPosition: position => dispatch(setFolderContextMenuPosition(position))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FolderView));
