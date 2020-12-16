import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as Table } from "./table";
import { setFileContextMenuPosition, openModal, setActionType, setSelectedFiles } from "../../../store";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  setFileContextMenuPosition: position => dispatch(setFileContextMenuPosition(position)),
  setActionType: actionType => dispatch(setActionType(actionType)),
  setSelectedFiles: selectedFiles => dispatch(setSelectedFiles(selectedFiles)),
  openModal: modal => dispatch(openModal(modal))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Table));
