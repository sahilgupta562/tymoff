import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as Card } from "./card";
import { setActiveContentIndex, openModal, setInitialSlide, contentOpen } from "../../../store";

const mapStateToProps = state => ({ loadFromSession: state.content.loadFromSession });

const mapDispatchToProps = dispatch => ({
  setActiveContentIndex: index => dispatch(setActiveContentIndex(index)),
  setInitialSlide: initialSlide => dispatch(setInitialSlide(initialSlide)),
  openModal: modal => dispatch(openModal(modal)),
  contentOpen: () => dispatch(contentOpen()),

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Card));
