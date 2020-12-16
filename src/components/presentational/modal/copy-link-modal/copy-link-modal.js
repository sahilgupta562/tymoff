import React, { PureComponent } from "react";
import { Dialog, DialogTitle, Slide } from "@material-ui/core";
import { ModalType } from "../../../../constant";
import "./copy-link-modal.scss";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default class CopyLinkModal extends PureComponent {
  handleClose = () => {
    const { closeModal, startScrollTimer, isContentDetailOpen, contentAlreadyVisited, commentBox } = this.props;
    isContentDetailOpen && !commentBox && !contentAlreadyVisited && startScrollTimer();
    closeModal(ModalType.COPY_LINK);
  };

  render() {
    const { modal, shareLink } = this.props;
    return (
      <Dialog
        open={modal}
        className="dialog-modal copy-link-modal"
        TransitionComponent={Transition}
        keepMounted
        onClose={this.handleClose}
        aria-labelledby="copy-link-title"
        aria-describedby="copy-link-description"
      >
        <button className="closeBtn" onClick={this.handleClose}></button>
        <DialogTitle id="copy-link-title">{"Copy Link"}</DialogTitle>
        <div className="modal-body">
          <div className="success-text copy-link-text">
            <p className="thank">Link copied to clipboard.</p>
            <p className="normal-text">
              <input type="text" disabled name="copyLink" defaultValue={shareLink} />
            </p>
          </div>
        </div>
      </Dialog>
    );
  }
}
