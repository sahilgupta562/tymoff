import { FEEDBACK } from "./action-types";

const clearFeedback = () => ({
  type: FEEDBACK.CLEAR
});

const setFeedbackError = error => ({
  type: FEEDBACK.LOAD_FAILED,
  error
});

const sendFeedback = () => ({
  type: FEEDBACK.SEND_FEEDBACK
});

const setFeedbackTitle = title => ({
  type: FEEDBACK.SET_FEEDBACK_TITLE,
  title
});

const setFeedbackDescription = description => ({
  type: FEEDBACK.SET_FEEDBACK_DESCRIPTION,
  description
});

export { sendFeedback, setFeedbackDescription, setFeedbackTitle, clearFeedback, setFeedbackError };
