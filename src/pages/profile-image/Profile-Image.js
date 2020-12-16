import React, { PureComponent } from "react";
import ButtonBase from "@material-ui/core/ButtonBase";
import { ModalType, ShareType } from "../../constant";
import { Edit, Share, SignInUser } from "../../icons";
import "./profile-image.scss";
import { CircularProgress } from "@material-ui/core";

export default class ProfileImage extends PureComponent {
  handleBack = () => {
    const { history } = this.props;
    history.goBack();
  };
  handleEditClick = () => {
    const { openModal } = this.props;
    openModal(ModalType.PROFILE_IMAGE_OPTION);
  };
  handleShareClick = () => {
    const { openModal, setShareType, setShareLink, picUrl } = this.props;
    if (picUrl) {
      setShareLink(picUrl);
      setShareType(ShareType.PROFILE_IMAGE);
      openModal(ModalType.SHARE);
    }
  };

  render() {
    const { picUrl, isImageLoading } = this.props;
    return (
      <div className="view-profile-image tab-hidden">
        <div className="sub-header space-between">
          <button className="back-btn" onClick={this.handleBack}></button>
          <h1> Profile Photo</h1>
          <div className="edit-share">
            <ButtonBase onClick={this.handleEditClick}>
              <Edit height={"20px"} width={"20px"} className="edit" />
            </ButtonBase>
            <ButtonBase onClick={this.handleShareClick}>
              <Share width={"20px"} height={"20px"} className="share" />
            </ButtonBase>
          </div>
        </div>
        <div className="profile-image-container">
          <div className="profile-image">{picUrl ? <img src={picUrl} alt="user profile" /> : <SignInUser width={"116px"} height={"116px"} className="signin-user" />}</div>
          {isImageLoading && <CircularProgress />}
        </div>
      </div>
    );
  }
}
