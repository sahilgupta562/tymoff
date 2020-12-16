import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as ContentDetail } from "./content-detail";

const mapStateToProps = state => ({ activeContent: state.content.activeContent, loadFromSession: state.content.loadFromSession });

const mapDispatchToProps = dispatch => ({});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContentDetail));
