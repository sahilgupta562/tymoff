import React, { PureComponent } from "react";
import { Dialog, Slide, ButtonBase } from "@material-ui/core";
import { ModalType, RemoveImageAlert } from "../../../../constant";
import "./profile-image-option-modal.scss";
import removePhoto from "../../../../assets/images/remove-photo.svg";
import camera from "../../../../assets/images/camera.svg";
import gallery from "../../../../assets/images/gallery.svg";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default class ProfileImageOptionModal extends PureComponent {
  handleClose = () => {
    const { closeModal } = this.props;
    closeModal(ModalType.PROFILE_IMAGE_OPTION);
  };

  handleUploadProfileImage = event => {
    this.handleClose();
    const file = event.target.files[0];
    const { updateProfileImage } = this.props;
    updateProfileImage(file);
  };

  handleRemoveImage = () => {
    this.handleClose();
    const { setAlertAction } = this.props;
    setAlertAction(RemoveImageAlert);
  };

  handleTakeImage = () => {
    const { openModal } = this.props;
    openModal(ModalType.CAMERA);
    this.handleClose();
  };

  render() {
    const { modal,picUrl} = this.props;
    return (
      <Dialog
        open={modal}
        className="bottom-profile-image-option-modal"
        TransitionComponent={Transition}
        keepMounted
        onClose={this.handleClose}
        aria-labelledby="profile-image-option-title"
        aria-describedby="profile-image-option-description"
      >
        <p className="image-modal-title">Profile photo</p>
        <div className="edit-icon-container">
      {!!picUrl &&    <ButtonBase onClick={this.handleRemoveImage}>
            <div title="Remove Profile Photo">
              <img src={removePhoto} alt="" />
              <p>Remove Photo</p>
            </div>
          </ButtonBase>}
          <ButtonBase onClick={this.handleTakeImage}>
            <div title="Change Profile Photo">
              <img src={camera} alt="" />
              <p>Camera</p>
            </div>
          </ButtonBase>
          <ButtonBase onClick={() => (this.uploadRefs ? this.uploadRefs.click() : {})}>
            <div title="Change Profile Photo">
              <img src={gallery} alt="" />
              <input type="file" name="file" accept="image/*" ref={ref => (this.uploadRefs = ref)} style={{ display: "none" }} onChange={this.handleUploadProfileImage} />
              <p>Gallery</p>
            </div>
          </ButtonBase>
        </div>
      </Dialog>
    );
  }
}
