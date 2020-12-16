import React, { PureComponent, Fragment } from "react";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { AppBar, Toolbar, IconButton, Button, Badge } from "@material-ui/core";
import { Menu as MenuIcon, MoreVert as MoreIcon } from "@material-ui/icons";
import { Logo, Upload, Bell, SignInUser, UploadProgress, UploadMobile } from "../../../icons";
import { ModalType, ContentAction, SelectedText } from "../../../constant";
import IntervalTimer from "react-interval-timer";
import { setGlobalThemeVariable } from "../../../core";
import Sidebar from "../sidebar";
import Search from "../search";
import searchIcon from "../../../assets/images/search-icon.svg";

import "./header.scss";

class Header extends PureComponent {
  constructor(props) {
    super(props);
    const { loadUiData, isLoggedIn, loadNotification, loadUserDiscoverList, darkTheme, refreshUserProfile } = props;
    setGlobalThemeVariable(!darkTheme);
    loadUiData();
    if (isLoggedIn) {
      loadNotification();
      loadUserDiscoverList();
      refreshUserProfile();
    }
  }
  handleSidebar = () => {
    const { sidebar, openSidebar, closeSidebar } = this.props;
    sidebar ? closeSidebar() : openSidebar();
  };

  handleLoginClick = () => {
    const { openModal, clearSelectedText } = this.props;
    openModal(ModalType.LOGIN);
    clearSelectedText();
  };

  handleSearch = () => {
    const { history } = this.props;
    history.push("/search");
  };

  handleUploadClick = () => {
    const { isLoggedIn, openModal, showSelectedText } = this.props;
    if (isLoggedIn) openModal(ModalType.UPLOAD);
    else {
      openModal(ModalType.LOGIN);
      showSelectedText(SelectedText.UPLOAD_TEXT);
    }
  };

  handleNotificationClick = () => {
    const { isLoggedIn, openModal, setNotificationsCount } = this.props;
    if (isLoggedIn) {
      openModal(ModalType.NOTIFICATION);
      const count = 0;
      const notificCount = "notificationCount";
      const notificationCount = JSON.parse(localStorage.getItem(notificCount));
      if (notificationCount > 0) {
        localStorage.setItem(notificCount, count)
        setNotificationsCount(count);
      }
    }
  };

  handleUploadNotificationClick = () => {
    const { isLoggedIn, openModal } = this.props;
    if (isLoggedIn) openModal(ModalType.UPLOAD_NOTIFICATION);
  };

  handleBack = () => {
    const { history } = this.props;
    history.goBack();
  };

  displayNewFeed = () => {
    const { showNewfeed } = this.props;
    showNewfeed();
  };

  removeSession = () => {
    const { loadWebsite } = this.props;
    loadWebsite();
  };

  displayInstallApp = () => {
    const { showInstallApp } = this.props;
    showInstallApp();
  };

  render() {
    const { openModal, isLoggedIn, notificationCount, picUrl, uploadFileCount, history, newFeed, loadFromSession, contentAction, navlinkChange, installApp } = this.props;
    const { location } = history;
    const searchRoute = "/search";
    const showSearchOnly = !!(isMobile && location.pathname === searchRoute);
    const startNewFeedTimer = !newFeed && !!(contentAction !== ContentAction.upload);
    return (
      <Fragment>
        {isMobile && <IntervalTimer timeout={60000} callback={() => this.displayInstallApp()} enabled={!installApp} repeat={false} />}
        <IntervalTimer timeout={60000 * 20} callback={() => this.displayNewFeed()} enabled={startNewFeedTimer} repeat={false} />
        <IntervalTimer timeout={60000 * 30} callback={() => this.removeSession()} enabled={loadFromSession} repeat={false} />
        <AppBar position="fixed" className="appBar" elevation={0}>
          <Toolbar className="MuiToolbarRegular">
            <div className="headerLogo">
              {!isMobile && (
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={this.handleSidebar} className="hamburger">
                  <MenuIcon />
                </IconButton>
              )}
              {!showSearchOnly && (
                <Link to="/">
                  <Logo width={"80px"} height={"24px"} className={`logo-original  ${!isMobile && navlinkChange ? "nav-change" : null}`} />
                </Link>
              )}
            </div>
            {!showSearchOnly && <Search />}
            {!showSearchOnly && (
              <div className="headerRight">
                <div className="grow" />
                <div className="sectionDesktop">
                  {isLoggedIn && !!uploadFileCount && (
                    <IconButton aria-label={`show ${uploadFileCount} new notifications`} onClick={this.handleUploadNotificationClick} color="inherit" className="headerRightButtons uploadProgress">
                      <Badge badgeContent={uploadFileCount} color="secondary">
                        <UploadProgress width={"20px"} height={"24px"} className="upload-progress" />
                      </Badge>
                    </IconButton>
                  )}
                  {isLoggedIn && (
                    <IconButton aria-label={`show ${notificationCount} new notifications`} onClick={this.handleNotificationClick} color="inherit" className="headerRightButtons notificationIcon">
                      <Badge badgeContent={notificationCount} color="secondary">
                        <Bell width={"20px"} height={"24px"} className="bell" />
                      </Badge>
                    </IconButton>
                  )}
                  <Button color="inherit" onClick={this.handleUploadClick} className="headerRightButtons uploadIcon">
                    <Upload width={"20px"} height={"24px"} className="upload" /> Upload
                  </Button>
                  {!isLoggedIn && (
                    <Button color="inherit" onClick={this.handleLoginClick} className="headerRightButtons signIcon">
                      <SignInUser width={"20px"} height={"24px"} className="signin-user" />
                      Sign in
                    </Button>
                  )}
                  <IconButton aria-label="show more option" color="inherit" className="headerRightButtons" onClick={() => openModal(ModalType.SETTING)}>
                    {!isLoggedIn ? <MoreIcon /> : picUrl ? <img className="userIcon" src={picUrl} alt="" /> : <SignInUser width={"20px"} height={"24px"} className="signin-user" />}
                  </IconButton>
                </div>
                <div className="sectionMobile">
                  <Button onClick={this.handleSearch} className="headerRightButtons">
                    <img src={searchIcon} alt="" />
                  </Button>
                  <Button color="inherit" onClick={this.handleUploadClick} className="headerRightButtons uploadIcon">
                    <UploadMobile width={"20px"} height={"24px"} className="upload-mobile" />
                  </Button>
                </div>
              </div>
            )}
          </Toolbar>
          {showSearchOnly && (
            <div className="header-search tab-hidden">
              <button className="back-btn" onClick={this.handleBack}></button>
              <Search />
            </div>
          )}
        </AppBar>
        {!isMobile && <Sidebar />}
      </Fragment>
    );
  }
}

export default Header;
