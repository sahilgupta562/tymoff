import React, { PureComponent } from "react";
import { List, ListItem, ListItemText, Switch } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { ModalType, SettingMenu, ClearHistoryAlert, LogoutAlert } from "../../constant";
import { setGlobalThemeVariable } from "../../core";
import "./setting.scss";

export default class Setting extends PureComponent {
  handleBackClick = () => {
    const { history } = this.props;
    !!history.length ? history.goBack() : history.push("/");
  };
  handleListItemClick = selectedMenu => {
    const { setAlertAction, openModal } = this.props;
    selectedMenu === SettingMenu.CLEAR_HISTORY && setAlertAction(ClearHistoryAlert);
    selectedMenu === SettingMenu.LOG_OUT && setAlertAction(LogoutAlert);
    selectedMenu === SettingMenu.CONTENT_SCROLL_TIMER && openModal(ModalType.SCROLL_TIMER);
    selectedMenu === SettingMenu.FEEDBACK && openModal(ModalType.FEEDBACK);
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
    const { contentScrollTime, darkTheme, restrictedMode } = this.props;
    return (
      <div className="settingPage">
        <div className="settingHeader">
          <button className="back-btn mobile" onClick={this.handleBackClick}>
            Back
          </button>
          Settings
        </div>
        <div className="settingBody">
          <div className="account-settings">
            <List>
              <ListItem onClick={() => this.handleListItemClick(SettingMenu.CLEAR_HISTORY)}>
                <ListItemText primary={"Clear History"} />
              </ListItem>
              <ListItem onClick={() => this.handleListItemClick(SettingMenu.CONTENT_SCROLL_TIMER)}>
                <ListItemText primary={"Content Scroll Timer"} />
                <span className="subtext">Content detail would scroll every {contentScrollTime > 0 ? contentScrollTime : 12} seconds</span>
                <Switch checked={!!contentScrollTime > 0} />
              </ListItem>
              <ListItem>
                <ListItemText primary={"Dark Theme"} />
                <span className="subtext">{`${darkTheme ? "Disable" : "Enable"} dark theme`}</span>
                <Switch checked={darkTheme} value={darkTheme} onChange={() => this.handleSwitch(SettingMenu.DARK_THEME)} />
              </ListItem>
              <ListItem>
                <ListItemText primary={"Restricted Mode"} />
                <span className="subtext">If enabled it restricts the availablity of potentially mature or objectionable content</span>
                <Switch checked={restrictedMode} value={restrictedMode} onChange={() => this.handleSwitch(SettingMenu.RESTRICTED_MODE)} />
              </ListItem>
              <ListItem exact to={"/privacy-policy"} component={NavLink}>
                <ListItemText primary={"Privacy Policy"} />
              </ListItem>
              <ListItem onClick={() => this.handleListItemClick(SettingMenu.FEEDBACK)}>
                <ListItemText primary={"Feedback"} />
              </ListItem>
              <ListItem exact to={"/terms-conditions"} component={NavLink}>
                <ListItemText primary={"Terms & Conditions"} />
              </ListItem>
              <ListItem exact to={"/contact"} component={NavLink}>
                <ListItemText primary={"Contact"} />
              </ListItem>
              <ListItem onClick={() => this.handleListItemClick(SettingMenu.LOG_OUT)}>
                <ListItemText primary={"Log Out"} />
              </ListItem>
            </List>
          </div>
        </div>
      </div>
    );
  }
}
