import React, { PureComponent } from "react";
import { Modal, Backdrop, Fade } from "@material-ui/core";
import Camera, { FACING_MODES, IMAGE_TYPES } from "react-html5-camera-photo";
import { ModalType } from "../../../../constant";
import "react-html5-camera-photo/build/css/index.css";
import "./camera-modal.scss";

class CameraModal extends PureComponent {
  state = { captureImage: "", cameraMode: FACING_MODES.USER };
  handleClose = () => {
    const { closeModal } = this.props;
    closeModal(ModalType.CAMERA);
  };

  handleTakePhoto = captureImage => this.setState({ captureImage });

  switchCamera = () => {
    this.setState(prevstate => ({ cameraMode: prevstate.cameraMode === FACING_MODES.USER ? FACING_MODES.ENVIRONMENT : FACING_MODES.USER }));
  };

  handleCameraError = error => {
    console.log("handleCameraError", error);
  };

  uploadProfileImage = () => {
    const b64toBlob = require("b64-to-blob");
    const randomstring = require("randomstring");
    const { captureImage } = this.state;
    const { updateProfileImage } = this.props;
    if (captureImage) {
      const b64Data = captureImage.split(",").pop();
      const blob = b64toBlob(b64Data, "image/jpeg");
      const uniqString = randomstring.generate();
      const file = new File([blob], `profile_pic_${uniqString}.jpeg`, {
        lastModified: new Date(),
        path: `profile_pic_${uniqString}.jpeg`
      });
      this.handleClose();
      updateProfileImage(file);
    }
  };

  render() {
    const { modal } = this.props;
    const { captureImage, cameraMode } = this.state;
    return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal camera-take-photo-modal"
        open={modal}
        onClose={this.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={modal}>
          <div className="paper camera-take-photo-paper">
            <button className="closeBtn mobile-hidden" onClick={this.handleClose}></button>
            <button className="back-btn tab-hidden" onClick={this.handleClose}></button>
            <div className="modalContent">
              {captureImage ? (
                <img src={captureImage} alt="" />
              ) : (
                <Camera
                  onTakePhoto={dataUri => {
                    this.handleTakePhoto(dataUri);
                  }}
                  onCameraError={error => {
                    this.handleCameraError(error);
                  }}
                  idealFacingMode={cameraMode}
                  idealResolution={{ width: 200, height: 200 }}
                  imageType={IMAGE_TYPES.JPG}
                  imageCompression={0.97}
                  isMaxResolution={true}
                  isImageMirror={true}
                  isSilentMode={false}
                  isDisplayStartCameraError={false}
                  isFullscreen={false}
                  sizeFactor={1}
                />
              )}
              {captureImage && (
                <div className="camera-actions">
                  <button className="camera-btn" onClick={this.uploadProfileImage}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30">
                      <path fill="#707070" d="M9.9 21.25l-6.7-6.7-2.2 2.2 8.9 8.9L29 6.55l-2.2-2.2-16.9 16.9z"></path>
                    </svg>
                  </button>
                  <button className="retake-btn" onClick={() => this.setState({ captureImage: "" })}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
                      <path
                        fill="#707070"
                        d="M19.77 11.73c0 1.64-.5 2.95-1.48 3.89-1.38 1.32-3.26 1.41-3.75 1.41H9.01v-2.1h5.46c.05 0 1.47.04 2.38-.84.55-.53.82-1.32.82-2.37 0-1.27-.33-2.23-.99-2.84-.98-.92-2.43-.85-2.44-.85h-4.23v3.1L4 7.07 10.01 3v2.93h4.16c.03 0 2.29-.13 3.95 1.42 1.09 1.03 1.65 2.5 1.65 4.38z"
                      ></path>
                    </svg>
                  </button>
                </div>
              )}
              {!captureImage && (
                <div className="switch-btn">
                  <button className="btn" onClick={this.switchCamera}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 167 153.4" width="30" height="30">
                      <g>
                        <path
                          fill="#eee"
                          d="M15,112.1c-4.9,5.1-9.7,10.2-15,15.9c0-15,0-29.3,0-43.8c13.4,0,26.9,0,41.2,0c-3.4,3.7-6.3,6.9-9.3,10.1
		c-7.1,7.4-7.1,7.4-1.3,16.3c14.6,22.3,39.8,32.9,65.7,27.6c25-5,44.4-25,49-50.9c0.5-2.9,1.5-3.7,4.3-3.6c3.2,0.2,6.4,0,9.6,0
		c0.8,17.4-13.3,48.7-43.6,62.8C83.9,161.3,37.6,153.3,15,112.1z"
                        />
                        <path
                          fill="#eee"
                          d="M154.3,47c4.3-4,8.2-7.7,12.6-11.8c0,13.2,0,25.9,0,38.8c-13.5,0-26.8,0-40.8,0c0.9-1.1,1.4-1.9,2.1-2.5
		c3.7-3.5,7.2-7.3,11.2-10.4c3.5-2.8,3.6-5.3,1.8-9.1C130.1,28.7,111.8,15.6,86,14.2c-31.7-1.6-58.8,20.7-64.3,52.3
		c-0.5,2.8-1.5,3.5-4,3.3c-3.3-0.2-6.7,0-10,0C7.7,48.4,24.3,17.1,56.1,5.2c19.3-7.2,38.5-7,57.5,1.1
		C132.4,14.3,145.6,28.2,154.3,47z"
                        />
                        <path
                          fill="#eee"
                          d="M83.6,104.7c-9.3,0-18.7,0.1-28,0c-5.9,0-7-1.1-7-7c0-10.1-0.1-20.2,0-30.2c0-2.2,0.4-4.5,1.1-6.5c1.3-3.4,3.8-5.5,7.8-5.1
		c4.2,0.4,6.9-1.2,8.2-5.3c1.9-6.6,6.1-9.5,13.2-8.7c3.9,0.4,8,0.2,11.9,0c3.8-0.2,6.4,1.5,8.2,4.7c1,1.7,2,3.4,2.9,5.2
		c1.4,2.8,3.6,3.9,6.6,4.1c6.7,0.4,9.6,3.3,9.8,10c0.2,6.6,0,13.2,0.1,19.8c0,4.1,0,8.2,0,12.3c0,5.6-1,6.7-6.8,6.8
		C102.3,104.8,92.9,104.7,83.6,104.7C83.6,104.7,83.6,104.7,83.6,104.7z M83.7,65.5c-7.8-0.1-14,6.1-14,13.9
		c0,7.6,6.2,13.8,13.7,13.9c7.8,0.1,14-6.1,14-13.9C97.4,71.7,91.3,65.5,83.7,65.5z"
                        />
                      </g>
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        </Fade>
      </Modal>
    );
  }
}

export default CameraModal;
