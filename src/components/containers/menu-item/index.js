import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as MenuItem } from "./menu-item";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MenuItem));
