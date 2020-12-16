import React, { PureComponent } from "react";
import { Modal, Backdrop, Fade } from "@material-ui/core";
import { ModalType } from "../../../../constant";
import "./install-app-modal.scss";
import { Logo } from "../../../../icons";

class InstallAppModal extends PureComponent {
  handleClose = () => {
    const { closeModal } = this.props;
    closeModal(ModalType.INSTALL_APP);
  };
  handleInstallApp = () => {
    const { closeModal } = this.props;
    closeModal(ModalType.INSTALL_APP);
    window.open("https://dl.tymoff.com/yKsD3TcX9dRKFNkR9");
  };
  render() {
    const { modal } = this.props;
    return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={modal}
        onClose={this.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modal}>
          <div className="paper install-modal">
            <button className="closeBtn" onClick={this.handleClose}></button>
            <div className="modalContent">
              <div className="modalHeader">
                <Logo width={"120px"} height={"37px"} className="logo-original" />
              </div>
              <div className="modalBody">
                <h4>
                  {/* Install tymoff from app store <br />
                  for better experience */}
                  Open tymoff in app <br />
                  for better experience
                </h4>
              </div>
              <div className="modalFooter">
                <button className="btn-install" onClick={this.handleInstallApp}>
                  {/* Install */}
                  Open in app
                </button>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    );
  }
}

export default InstallAppModal;
