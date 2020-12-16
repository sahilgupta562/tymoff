import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as ReportContentModal } from "./report-content-modal";
import { closeModal, setReportContentId, reportContent, startScrollTimer } from "../../../../store";

const mapStateToProps = state => ({
  modal: state.ui.modal.report_content || false,
  isContentDetailOpen: state.content.isContentDetailOpen,
  contentAlreadyVisited: state.content.contentAlreadyVisited,
  reportReasons: state.master.report,
  error: state.content.error,
  commentBox: state.ui.commentBox
});

const mapDispatchToProps = dispatch => ({
  closeModal: modal => dispatch(closeModal(modal)),
  setReportContentId: reportId => dispatch(setReportContentId(reportId)),
  startScrollTimer: () => dispatch(startScrollTimer()),
  reportContent: () => dispatch(reportContent())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReportContentModal));
