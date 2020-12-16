import React, { PureComponent } from "react";
import { Modal, Backdrop, Fade } from "@material-ui/core";
import { ModalType } from "../../../../constant";
import { Notifications } from "../../../containers";
import "./notification-modal.scss";

class NotificationModal extends PureComponent {
  handleClose = () => {
    const { closeModal } = this.props;
    closeModal(ModalType.NOTIFICATION);
  };

  render() {
    const { modal } = this.props;
    return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal modal-backdrop"
        open={modal}
        onClose={this.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={modal}>
          <div className="paper notification-modal">
            <div className="header-notification">
              <div className="notifi-header">
                <span>Notifications</span>
              </div>
            </div>
            <Notifications />
          </div>
        </Fade>
      </Modal>
    );
  }
}

export default NotificationModal;
