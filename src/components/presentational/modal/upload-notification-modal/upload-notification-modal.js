import React, { PureComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileVideo, faImage, faImages } from "@fortawesome/free-regular-svg-icons";
import { Modal, Backdrop, Fade } from "@material-ui/core";
import { ModalType, UploadTab } from "../../../../constant";
import "./upload-notification-modal.scss";

class UploadNotificationModal extends PureComponent {
  handleClose = () => {
    const { closeModal } = this.props;
    closeModal(ModalType.UPLOAD_NOTIFICATION);
  };

  render() {
    const { modal, uploadingFiles } = this.props;
    return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal backdrop-transparent"
        open={modal}
        onClose={this.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={modal}>
          <div className="paper upload-notification-modal">
            <div className="notifi-header">
              <span>Upload Content</span>
            </div>
            {uploadingFiles.map((file, index) => (
              <div key={index} className="notifi">
                <div className="sub">
                  {UploadTab.VIDEO === file.contentType ? (
                    <FontAwesomeIcon className="icon" icon={faFileVideo} style={{ fontSize: "25px" }} />
                  ) : (
                      <FontAwesomeIcon className="icon" icon={file.totalFiles === 1 ? faImage : faImages} style={{ fontSize: "25px" }} />
                    )}
                </div>
                <div className="sub">{`(${file.totalFiles}) ${file.contentType}`}</div>
                <div className="noti-icons">
                  <i className="fa fa-upload" aria-hidden="true"></i>
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </Modal>
    );
  }
}

export default UploadNotificationModal;
