import React, { PureComponent, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faClock, faMoon, faEdit } from "@fortawesome/free-regular-svg-icons";
import { faBan, faEraser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Modal, Backdrop, Fade, List, ListItem, ListItemText, Divider, Switch } from "@material-ui/core";
import { ModalType, SettingMenu, ClearHistoryAlert, LogoutAlert } from "../../../../constant";
import { setGlobalThemeVariable } from "../../../../core";
import { SignInUser } from "../../../../icons";
import "./setting-modal.scss";

class SettingModal extends PureComponent {
  handleClose = () => {
    const { closeModal, darkThememodal } = this.props;
    darkThememodal ? closeModal(ModalType.DARK_THEME) : closeModal(ModalType.SETTING);
  };
  handleListItemClick = selectedMenu => {
    selectedMenu !== SettingMenu.DARK_THEME && this.handleClose();
    const { history, setAlertAction, openModal } = this.props;
    selectedMenu === SettingMenu.PROFILE && history.push("/account");
    selectedMenu === SettingMenu.CLEAR_HISTORY && setAlertAction(ClearHistoryAlert);
    selectedMenu === SettingMenu.LOG_OUT && setAlertAction(LogoutAlert);
    selectedMenu === SettingMenu.FEEDBACK && openModal(ModalType.FEEDBACK);
    selectedMenu === SettingMenu.CONTENT_SCROLL_TIMER && openModal(ModalType.SCROLL_TIMER);
    selectedMenu === SettingMenu.DARK_THEME && openModal(ModalType.DARK_THEME);
  };

  handleSwitch = selectedMenu => {
    const { restrictedMode, darkTheme, enableRestrictedMode, disableRestrictedMode, enableDarkMode, disableDarkMode } = this.props;
    if (selectedMenu === SettingMenu.RESTRICTED_MODE) restrictedMode ? disableRestrictedMode() : enableRestrictedMode();
    if (selectedMenu === SettingMenu.DARK_THEME) {
      setGlobalThemeVariable(darkTheme);
      darkTheme ? disableDarkMode() : enableDarkMode();
    }
  };

  render() {
    const { modal, darkThememodal, restrictedMode, user, isLoggedIn, closeModal, darkTheme, contentScrollTime, picUrl } = this.props;
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
          <div className="paper activeUser">
            {!darkThememodal ? (
              <div className="modalContent">
                {isLoggedIn && (
                  <div className="modalHeader">
                    {picUrl ? <img src={picUrl} alt="" /> : <SignInUser height={"45px"} width={"45px"} className="signin-user" />}
                    <div className="modalTitle">
                      <h4 className="user-name">{user.name}</h4>
                      <h4 className="user-mobile">{user.phone}</h4>
                    </div>
                  </div>
                )}
                <div className="modalBody">
                  <List className="activeUserUL">
                    {isLoggedIn && (
                      <ListItem
                        onClick={() => {
                          this.handleClose();
                          this.handleListItemClick(SettingMenu.PROFILE);
                        }}
                      >
                        <FontAwesomeIcon className="icon" icon={faUserCircle} />
                        <ListItemText primary={"Profile"} />
                      </ListItem>
                    )}
                    {isLoggedIn && (
                      <ListItem onClick={() => this.handleListItemClick(SettingMenu.CONTENT_SCROLL_TIMER)}>
                        <FontAwesomeIcon className="icon" icon={faClock} />
                        <ListItemText primary={"Content Scroll Timer"} />
                        <Switch checked={!!contentScrollTime > 0} />
                      </ListItem>
                    )}
                    <ListItem className="dark-theme-li" onClick={() => this.handleListItemClick(SettingMenu.DARK_THEME)}>
                      <FontAwesomeIcon className="icon" icon={faMoon} />
                      <ListItemText primary={"Dark Theme"} />
                    </ListItem>
                    {isLoggedIn && (
                      <ListItem>
                        <FontAwesomeIcon className="icon" icon={faBan} />
                        <ListItemText primary={"Restricted Mode"} />
                        <Switch checked={restrictedMode} value={restrictedMode} onChange={() => this.handleSwitch(SettingMenu.RESTRICTED_MODE)} />
                      </ListItem>
                    )}
                    {isLoggedIn && (
                      <ListItem onClick={() => this.handleListItemClick(SettingMenu.FEEDBACK)}>
                        <FontAwesomeIcon className="icon" icon={faEdit} />
                        <ListItemText primary={"Feedback"} />
                      </ListItem>
                    )}
                  </List>
                  {isLoggedIn && (
                    <Fragment>
                      <Divider />
                      <List>
                        <ListItem onClick={() => this.handleListItemClick(SettingMenu.CLEAR_HISTORY)}>
                          <FontAwesomeIcon className="icon" icon={faEraser} />
                          <ListItemText primary={"Clear History"} />
                        </ListItem>
                        <ListItem onClick={() => this.handleListItemClick(SettingMenu.LOG_OUT)}>
                          <FontAwesomeIcon className="icon" icon={faSignOutAlt} />
                          <ListItemText primary={"Log out"} />
                        </ListItem>
                      </List>
                    </Fragment>
                  )}
                </div>
              </div>
            ) : (
              <div className="modalContent dark-theme-setting">
                <div className="account-header">
                  <button className="back-btn" onClick={() => closeModal(ModalType.DARK_THEME)}>
                    Back
                  </button>
                  <span className="title">Dark theme</span>
                </div>
                <ul className="menu-list dtheme">
                  <li>Dark theme turns the light surfaces of the page dark, creating an experience ideal for night. Try it out!</li>
                  <li>Your Dark theme setting will apply to this browser only.</li>
                  <li className="dark-theme-button">
                    <span>DARK THEME</span>
                    <div>
                      <Switch checked={darkTheme} value={darkTheme} onChange={() => this.handleSwitch(SettingMenu.DARK_THEME)} />
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </Fade>
      </Modal>
    );
  }
}

export default SettingModal;
