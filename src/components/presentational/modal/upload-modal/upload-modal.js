import React, { PureComponent } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { ModalType, UploadStep, UploadModalRootClass, UploadAlert } from "../../../../constant";
import { LanguageSelector, GenreSelector } from "../../../containers";
import ContainerUpload from "./container-upload";

class UploadModal extends PureComponent {
  handleBack = () => {
    const { activeStep, setUploadStep } = this.props;
    activeStep === UploadStep.LANGUAGE && setUploadStep(UploadStep.DATA);
    activeStep === UploadStep.GENRE && setUploadStep(UploadStep.LANGUAGE);
  };

  handleClose = () => {
    const { closeModal, setAlertAction, unsavedUploadChange,contents } = this.props;
    if (unsavedUploadChange || contents.length>=1) setAlertAction(UploadAlert);
    else closeModal(ModalType.UPLOAD);
  };

  render() {
    const { modal, activeStep } = this.props;
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
          <div className={`paper ${UploadModalRootClass[activeStep]}`}>
            {activeStep !== UploadStep.DATA && <button className="back-btn" onClick={this.handleBack}></button>}
            <button className="closeBtn mobile-hidden" onClick={this.handleClose}></button>
            <button className="back-btn tab-hidden" onClick={this.handleClose}></button>
            {activeStep === UploadStep.DATA && <ContainerUpload />}
            {activeStep === UploadStep.LANGUAGE && <LanguageSelector buttonText={"Next"} />}
            {activeStep === UploadStep.GENRE && <GenreSelector />}
          </div>
        </Fade>
      </Modal>
    );
  }
}

export default UploadModal;
