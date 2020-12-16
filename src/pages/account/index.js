import { connect } from "react-redux";
import { default as Account } from "./Account";
import { clearFilter, openModal, setContentAction, resetContentPage, clearContent } from "../../store";

const mapStateToProps = state => ({ routeFromLightbox: state.content.routeFromLightbox });

const mapDispatchToProps = dispatch => ({
  clearFilter: () => dispatch(clearFilter()),
  openModal: modal => dispatch(openModal(modal)),
  setContentAction: action => dispatch(setContentAction(action)),
  resetContentPage: () => dispatch(resetContentPage()),
  clearContent: () => dispatch(clearContent()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
