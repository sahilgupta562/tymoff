import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as Image } from "./image";
import { stopScrollTimer } from "../../../../store";

const mapStateToProps = state => ({ loadFromSession: state.content.loadFromSession ,contentList: state.content.data});

const mapDispatchToProps = dispatch => ({ stopScrollTimer: () => dispatch(stopScrollTimer()) });

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Image));
