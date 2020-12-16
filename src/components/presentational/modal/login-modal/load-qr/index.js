import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as LoadQR } from "./load-qr";
import { setAuth, closeModal } from "../../../../../store";

const mapStateToProps = state => ({ isContentDetailOpen: state.content.isContentDetailOpen });

const mapDispatchToProps = dispatch => ({
  setAuth: user => dispatch(setAuth(user)),
  closeModal: modal => dispatch(closeModal(modal))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoadQR));
