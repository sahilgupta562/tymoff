import React, { PureComponent } from "react";
import { ButtonBase } from "@material-ui/core";
import { ModalType } from "../../../constant";
import { Edit, Setting } from "../../../icons";
import "./user-info.scss";

class UserInfo extends PureComponent {
  redirectToSetting = () => {
    const { history } = this.props;
    history.push("/settings");
  };

  render() {
    const { user, openModal } = this.props;
    return (
      <div className="basicinfo">
        <div className="info">
         {!!user.name && <div className="name">{user.name}</div>}
          <div className="number">{user.phone}</div>
        </div>
        <div className="editProfile" onClick={() => openModal(ModalType.EDIT_PROFILE)}>
          <Edit height={"16px"} width={"16px"} className="edit" />
          <span>Edit Profile</span>
        </div>
        <div className="settingMobile tab-hidden">
          <ButtonBase onClick={this.redirectToSetting}>
            <Setting height={"20px"} width={"20px"} className="setting" />
          </ButtonBase>
        </div>
      </div>
    );
  }
}

export default UserInfo;
