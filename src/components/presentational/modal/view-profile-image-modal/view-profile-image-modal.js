import React, { PureComponent } from "react";
import { Dialog, Slide } from "@material-ui/core";
import { ModalType } from "../../../../constant";
import "./view-profile-image-modal.scss";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default class ViewProfileImageModal extends PureComponent {
  handleClose = () => {
    const { closeModal } = this.props;
    closeModal(ModalType.VIEW_PROFILE_IMAGE);
  };

  handleSuccess = () => {};

  render() {
    const { modal, picUrl } = this.props;
    return (
      <Dialog
        open={modal}
        className="dialog-modal view-profile-image-modal"
        fullScreen
        TransitionComponent={Transition}
        keepMounted
        onClose={this.handleClose}
        aria-labelledby="view-profile-image-title"
        aria-describedby="view-profile-image-description"
      >
        <button className="closeBtn" onClick={this.handleClose}></button>
        <div>
          <div className="profile-image">
            <img src={picUrl} alt="" />
          </div>
        </div>
      </Dialog>
    );
  }
}
