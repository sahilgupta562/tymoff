import React, { PureComponent } from "react";
import { Dialog, DialogActions, DialogTitle, Slide, Button } from "@material-ui/core";
import { ModalType } from "../../../../constant";
import "./scroll-timer-modal.scss";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default class ScrollTimerModal extends PureComponent {
  constructor(props) {
    super(props);
    const { contentScrollTime } = this.props;
    this.state = {
      scrollTime: contentScrollTime,
      prevScrollTime: contentScrollTime,
      formValid: false
    };
  }
  handleClose = () => {
    const { closeModal } = this.props;
    closeModal(ModalType.SCROLL_TIMER);
  };

  handleSuccess = () => {
    const { changeContentScrollTime } = this.props;
    const { scrollTime } = this.state;
    this.handleClose();
    changeContentScrollTime(scrollTime);
  };

  handleChange = (e) => {
    this.setState({ scrollTime: parseInt(e.target.value) });

    setTimeout(() => {
      this.setState({ formValid: this.validateForm() });
    }, 100);

  }

  validateForm = () => {

    if (this.state.prevScrollTime === this.state.scrollTime) {
      return false;
    } else {
      return true;
    }
  }

  renderOptions = () => {
    let items = 60;
    let options = [];
    let i = 0;
    for (i = 5; i <= items; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return options;
  };

  render() {
    const { modal } = this.props;
    const { scrollTime } = this.state;
    return (
      <Dialog
        open={modal}
        className="dialog-modal content-scroll-modal"
        TransitionComponent={Transition}
        keepMounted
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Content Scroll Timer"}</DialogTitle>
        <div className="modal-body">
          <p>
            <select value={scrollTime} onChange={e => this.handleChange(e)}>
              <option value={0}>0</option>
              {this.renderOptions()}
            </select>
            &nbsp; Seconds
          </p>
        </div>
        <div className="modal-footer">
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSuccess} disabled={!this.state.formValid} color="primary">
              Confirm
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    );
  }
}
