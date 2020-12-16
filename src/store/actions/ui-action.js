import { UI } from "./action-types";

const openSidebar = () => ({
  type: UI.OPEN_SIDEBAR,
});

const closeSidebar = () => ({
  type: UI.CLOSE_SIDEBAR,
});

const openModal = (modal) => ({
  type: UI.OPEN_MODAL,
  modal,
});

const closeModal = (modal) => ({
  type: UI.CLOSE_MODAL,
  modal,
});

const openSnackbar = () => ({
  type: UI.OPEN_SNACKBAR,
});

const openErrorSnackbar = () => ({
  type: UI.OPEN_ERROR_SNACKBAR,
});

const closeSnackbar = () => ({
  type: UI.CLOSE_SNACKBAR,
});

const closeErrorSnackbar = () => ({
  type: UI.CLOSE_ERROR_SNACKBAR,
});

const setMessage = (message) => ({
  type: UI.SET_MESSAGE,
  message,
});

const setErrorMessage = (errorMessage) => ({
  type: UI.SET_ERROR_MESSAGE,
  errorMessage,
});

const clearMessage = (message) => ({
  type: UI.CLEAR_MASSAGE,
  message,
});

const modalRoute = () => ({
  type: UI.MODAL_ROUTE,
});

const loadUiData = () => ({
  type: UI.LOAD_UI_DATA,
});

const setModalAction = (modalAction) => ({
  type: UI.MODAL_ACTION,
  modalAction,
});

const setAlertAction = (alertAction) => ({
  type: UI.ALERT_ACTION,
  alertAction,
});

const showCommentBox = () => ({
  type: UI.SHOW_COMMENT,
});

const hideCommentBox = () => ({
  type: UI.HIDE_COMMENT,
});

const onRenderDiscover = () => ({
  type: UI.RENDER_DISCOVER_ROUTE,
});

const onLeaveDiscover = () => ({
  type: UI.LEAVE_DISCOVER_ROUTE,
});

const showNewfeed = () => ({
  type: UI.SHOW_NEWFEED,
});

const hideNewfeed = () => ({
  type: UI.HIDE_NEWFEED,
});

const showInstallApp = () => ({
  type: UI.SHOW_INSTALL_APP,
});

const hideInstallApp = () => ({
  type: UI.HIDE_INSTALL_APP,
});

const navlinkChange = () => ({
  type: UI.NAVLINK_CHANGE,
});

const activeTab = () => ({
  type: UI.ACTIVE_TAB,
});

const inactiveTab = () => ({
  type: UI.INACTIVE_TAB,
});

export {
  openSidebar,
  closeSidebar,
  openModal,
  closeModal,
  modalRoute,
  loadUiData,
  setModalAction,
  setAlertAction,
  showCommentBox,
  hideCommentBox,
  onRenderDiscover,
  onLeaveDiscover,
  openSnackbar,
  closeSnackbar,
  setMessage,
  clearMessage,
  showNewfeed,
  hideNewfeed,
  navlinkChange,
  showInstallApp,
  hideInstallApp,
  setErrorMessage,
  openErrorSnackbar,
  closeErrorSnackbar,
  activeTab,
  inactiveTab,
};
