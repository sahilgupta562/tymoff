import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as MessageSnackbar } from "./message-snackbar";
import { closeSnackbar } from "../../../store";

const mapStateToProps = state => ({ message: state.ui.message, snackbar: state.ui.snackbar || false });

const mapDispatchToProps = dispatch => ({ closeSnackbar: modal => dispatch(closeSnackbar(modal)) });

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageSnackbar));
