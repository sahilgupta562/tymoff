import { connect } from "react-redux";
import { default as Setting } from "./Setting";
import { closeModal, openModal, enableDarkMode, disableDarkMode, enableRestrictedMode, disableRestrictedMode, setAlertAction } from "../../store";

const mapStateToProps = state => ({
  darkThememodal: state.ui.modal.dark_theme || false,
  darkTheme: state.setting.darkTheme,
  restrictedMode: state.setting.restrictedMode,
  user: state.auth.data,
  isLoggedIn: state.auth.isLoggedIn,
  contentScrollTime: state.setting.contentScrollTime,
  currentScrollTime: state.setting.currentScrollTime
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

export default connect(mapStateToProps, mapDispatchToProps)(Setting);
