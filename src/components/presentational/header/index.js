import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as Header } from "./header";
import { openSidebar, closeSidebar, loadUiData, openModal, loadNotification, loadUserDiscoverList, showNewfeed, loadWebsite, showInstallApp, refreshUserProfile, setNotificationsCount, showSelectedText, clearSelectedText } from "../../../store";

const mapStateToProps = state => ({
  sidebar: state.ui.sidebar,
  navlinkChange: state.ui.navlinkChange,
  isLoggedIn: state.auth.isLoggedIn,
  notificationCount: state.notification.count,
  picUrl: state.auth.data ? state.auth.data.picUrl : "",
  uploadFileCount: state.upload.uploadingFiles.length,
  darkTheme: state.setting.darkTheme,
  newFeed: state.ui.newFeed,
  installApp: state.ui.installApp,
  loadFromSession: state.content.loadFromSession,
  contentAction: state.content.contentAction
});

const mapDispatchToProps = dispatch => ({
  openSidebar: () => dispatch(openSidebar()),
  closeSidebar: () => dispatch(closeSidebar()),
  loadUiData: () => dispatch(loadUiData()),
  openModal: modal => dispatch(openModal(modal)),
  loadNotification: () => dispatch(loadNotification()),
  loadUserDiscoverList: () => dispatch(loadUserDiscoverList()),
  showNewfeed: () => dispatch(showNewfeed()),
  showInstallApp: () => dispatch(showInstallApp()),
  loadWebsite: () => dispatch(loadWebsite()),
  refreshUserProfile: () => dispatch(refreshUserProfile()),
  setNotificationsCount: count => dispatch(setNotificationsCount(count)),
  showSelectedText: text => dispatch(showSelectedText(text)),
  clearSelectedText: () => dispatch(clearSelectedText())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
