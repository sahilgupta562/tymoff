import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as Story } from "./story";
import { openModal } from "../../../../store";

const mapStateToProps = state => ({ contentList: state.content.data });

const mapDispatchToProps = dispatch => ({ openModal: modal => dispatch(openModal(modal)) });

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Story));
