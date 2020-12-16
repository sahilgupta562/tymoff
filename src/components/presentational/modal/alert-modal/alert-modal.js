import React, { PureComponent } from "react";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, Button } from "@material-ui/core";
import { ModalType, AlertAction } from "../../../../constant";
import "./alert-modal.scss";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default class AlertModal extends PureComponent {
  handleClose = () => {
    const { closeModal } = this.props;
    closeModal(ModalType.ALERT);
  };

  handleSuccess = () => {
    const { alertAction, clearUploadContent, clearHistory, closeModal, logout, removeProfileImage, history, deleteContent } = this.props;
    alertAction.type === AlertAction.UPLOAD && clearUploadContent();
    alertAction.type === AlertAction.CLEAR_HISTORY && clearHistory();
    alertAction.type === AlertAction.FEEDBACK_RESPONSE && closeModal(ModalType.FEEDBACK);
    alertAction.type === AlertAction.Delete_Post && deleteContent();
    if(alertAction.type === AlertAction.REMOVE_PROFILE_IMAGE){
      removeProfileImage();
      if(window.location.pathname.includes("profile-image")){
        history.goBack();
      }
   }
    if (alertAction.type === AlertAction.LOGOUT) {
      logout();
      history.push("/");
      const notificCount="notificationCount";
      localStorage.removeItem(notificCount);
    }
    closeModal(ModalType.ALERT);
  };

  render() {
    const { modal, alertAction } = this.props;
    return (
      <Dialog
        className="alert-modal"
        open={modal}
        TransitionComponent={Transition}
        keepMounted
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{alertAction.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <p>{alertAction.body}</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {alertAction.cancelText && (
            <Button onClick={this.handleClose} color="primary">
              {alertAction.cancelText}
            </Button>
          )}
          <Button onClick={this.handleSuccess} color="primary">
            {alertAction.successText}
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
