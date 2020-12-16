import React, { PureComponent } from "react";
import { Dialog, DialogTitle, Slide, ButtonBase } from "@material-ui/core";
import { ModalType } from "../../../../constant";
import "./report-content-modal.scss";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default class ReportContentModal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      formValid: false,
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    setTimeout(() => {
      this.setState({ formValid: this.validateForm() });
    }, 100);
  }

  validateForm = () => {
    if (this.props.setReportContentId === '') {
      return false;
    } else {
      return true;
    }
  }

  handleClose = () => {
    const { closeModal, startScrollTimer, isContentDetailOpen, contentAlreadyVisited, commentBox } = this.props;
    isContentDetailOpen && !commentBox && !contentAlreadyVisited && startScrollTimer();
    closeModal(ModalType.REPORT_CONTENT);
  };

  changeReportReason = reportId => {
    const { setReportContentId } = this.props;
    setReportContentId(reportId);
    setTimeout(() => {
      this.setState({ formValid: this.validateForm() });
    }, 100);
  };

  reportContent = () => {
    const { reportContent } = this.props;
    reportContent();
  };

  render() {
    const { modal, reportReasons, error } = this.props;
    return (
      <Dialog
        open={modal}
        className="dialog-modal report-content-modal"
        TransitionComponent={Transition}
        keepMounted
        onClose={this.handleClose}
        aria-labelledby="report-content-title"
        aria-describedby="report-content-description"
      >
        <DialogTitle id="report-content-title">{"Report Content"}</DialogTitle>
        <div className="modal-body">
          {reportReasons.map((report, index) => (
            <div key={report.id || index} className="redio-btn">
              <input type="radio" id={`report_${report.id}`} onChange={() => this.changeReportReason(report.id)} name="reportContent" />
              <label htmlFor={`report_${report.id}`}>{report.name}</label>
            </div>
          ))}
        </div>
        <div className="modal-footer">
          <ul>
            <li>
              <span className="error">{error}</span>
            </li>
            <li>
              <ButtonBase onClick={this.handleClose}>Cancel</ButtonBase>
            </li>
            <li>
              <ButtonBase disabled={!this.state.formValid} onClick={this.reportContent}>Report</ButtonBase>
            </li>

          </ul>
        </div>
      </Dialog>
    );
  }
}
