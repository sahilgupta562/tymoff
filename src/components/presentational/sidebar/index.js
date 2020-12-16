import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as Sidebar } from "./sidebar";
import { openModal } from "../../../store";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidebar));
