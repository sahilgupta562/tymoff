import React, { PureComponent } from "react";
import { ButtonBase, Menu, MenuItem, CircularProgress } from "@material-ui/core";
import { isMobile } from "react-device-detect";
import { ModalType, RemoveImageAlert } from "../../../constant";
import { SignInUser } from "../../../icons";
import "./profile-image.scss";

class ProfileImage extends PureComponent {
  state = { anchorEl: null };

  handleProfileOptionClick = event => {
    const { openModal, editProfileModal, history,picUrl } = this.props;
    editProfileModal ? openModal(ModalType.PROFILE_IMAGE_OPTION) : isMobile ? !!picUrl?history.push("/profile-image"):openModal(ModalType.EDIT_PROFILE) : this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => this.setState({ anchorEl: null });

  handleViewImage = () => {
    const { openModal } = this.props;
    openModal(ModalType.VIEW_PROFILE_IMAGE);
    this.handleClose();
  };

  handleUploadProfileImage = event => {
    this.handleClose();
    const file = event.target.files[0];
    if (file) {
      const { updateProfileImage } = this.props;
      updateProfileImage(file);
    }
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
    const { anchorEl } = this.state;
    const { picUrl ,isImageLoading} = this.props;
    return (
      <div className="profileImage">
        <ButtonBase aria-controls="profile_options" style={{ height: "100%", width: "100%" }} onClick={this.handleProfileOptionClick}>
          {picUrl ? <img src={picUrl} alt="" /> : <SignInUser width={"116px"} height={"116px"} className="signin-user" />}
          {isImageLoading && <CircularProgress />}
        </ButtonBase>
        <Menu id="profile_options" className="profile-image-option" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={this.handleClose}>
          {picUrl && <MenuItem onClick={this.handleViewImage}>View Image</MenuItem>}
          <MenuItem onClick={this.handleTakeImage}>Take Image</MenuItem>
          <MenuItem onClick={() => (this.uploadRefs ? this.uploadRefs.click() : {})}>
            <input type="file" name="file" accept="image/*" ref={ref => (this.uploadRefs = ref)} style={{ display: "none" }} onChange={this.handleUploadProfileImage} />
            Upload Image
          </MenuItem>
          {picUrl && <MenuItem onClick={this.handleRemoveImage}>Remove Image</MenuItem>}
        </Menu>
      </div>
    );
  }
}

export default ProfileImage;
