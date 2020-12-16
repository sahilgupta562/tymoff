import { connect } from "react-redux";
import { default as Login } from "./Login";
import { openModal, modalRoute } from "../../store";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  modalRoute: () => dispatch(modalRoute())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
