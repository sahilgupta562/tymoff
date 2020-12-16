import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as UserInfo } from "./user-info";
import { openModal } from "../../../store";

const mapStateToProps = state => ({ user: state.auth.data });

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserInfo));
