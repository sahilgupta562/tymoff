import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as ErrorMessageSnackbar } from "./error-message-snackbar";
import { closeErrorSnackbar } from "../../../store";

const mapStateToProps = state => ({ message: state.ui.errorMessage, snackbar: state.ui.errorSnackbar || false });

const mapDispatchToProps = dispatch => ({ closeErrorSnackbar: modal => dispatch(closeErrorSnackbar(modal)) });

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ErrorMessageSnackbar));
