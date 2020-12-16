import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as CardFooter } from "./card-footer";
import { openModal, setActiveContentIndex, setActiveContent, setShareType, setInitialSlide, setAlertAction, contentOpen } from "../../../store";

const mapStateToProps = state => ({
  contentAction: state.content.contentAction,
  loadFromSession: state.content.loadFromSession
});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  setActiveContentIndex: index => dispatch(setActiveContentIndex(index)),
  setInitialSlide: initialSlide => dispatch(setInitialSlide(initialSlide)),
  setActiveContent: content => dispatch(setActiveContent(content)),
  setShareType: type => dispatch(setShareType(type)),
  setAlertAction: alert => dispatch(setAlertAction(alert)),
  contentOpen: () => dispatch(contentOpen())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardFooter));
