import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as FeedbackModal } from "./feedback-modal";
import { closeModal, setFeedbackTitle, setFeedbackDescription, sendFeedback } from "../../../../store";

const mapStateToProps = state => ({
  modal: state.ui.modal.feedback || false,
  description: state.feedback.description,
  title: state.feedback.title,
  error: state.feedback.error
});

const mapDispatchToProps = dispatch => ({
  closeModal: modal => dispatch(closeModal(modal)),
  setFeedbackTitle: title => dispatch(setFeedbackTitle(title)),
  setFeedbackDescription: description => dispatch(setFeedbackDescription(description)),
  sendFeedback: () => dispatch(sendFeedback())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FeedbackModal));
