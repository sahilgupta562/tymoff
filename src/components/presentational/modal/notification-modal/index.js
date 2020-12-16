import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as NotificationModal } from "./notification-modal";
import { closeModal } from "../../../../store";

const mapStateToProps = state => ({
  modal: state.ui.modal.notification || false,
  notifications: state.notification.data
});

const mapDispatchToProps = dispatch => ({
  closeModal: modal => dispatch(closeModal(modal))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NotificationModal));
