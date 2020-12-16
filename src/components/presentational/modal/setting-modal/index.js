import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as SettingModal } from "./setting-modal";
import { closeModal, openModal, enableDarkMode, disableDarkMode, enableRestrictedMode, disableRestrictedMode, setAlertAction } from "../../../../store";

const mapStateToProps = state => ({
  modal: state.ui.modal.setting || false,
  darkThememodal: state.ui.modal.dark_theme || false,
  darkTheme: state.setting.darkTheme,
  restrictedMode: state.setting.restrictedMode,
  user: state.auth.data,
  isLoggedIn: state.auth.isLoggedIn,
  contentScrollTime: state.setting.contentScrollTime,
  picUrl: state.auth.data.picUrl || ""
});

const mapDispatchToProps = dispatch => ({
  closeModal: modal => dispatch(closeModal(modal)),
  openModal: modal => dispatch(openModal(modal)),
  enableDarkMode: () => dispatch(enableDarkMode()),
  disableDarkMode: () => dispatch(disableDarkMode()),
  enableRestrictedMode: () => dispatch(enableRestrictedMode()),
  disableRestrictedMode: () => dispatch(disableRestrictedMode()),
  setAlertAction: alert => dispatch(setAlertAction(alert))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SettingModal));
