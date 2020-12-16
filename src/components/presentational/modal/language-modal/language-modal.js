import React, { PureComponent } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { ModalType } from "../../../../constant";
import { LanguageSelector } from "../../../containers";
import "./language-modal.scss";
class LanguageModal extends PureComponent {
  handleClose = () => {
    const { closeModal } = this.props;
    closeModal(ModalType.LANGUAGE);
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
          timeout: 500
        }}
      >
        <Fade in={modal}>
          <div className="paper language-modal">
            <button className="closeBtn mobile-hidden" onClick={this.handleClose}></button>
            {/* <button className="back-btn desktop-hidden" onClick={this.handleClose}></button> */}
            <button className="back-btn tab-hidden" onClick={this.handleClose}></button>

            <LanguageSelector buttonText={"Submit"} />
          </div>
        </Fade>
      </Modal>
    );
  }
}

export default LanguageModal;
