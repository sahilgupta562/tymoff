import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as Layout } from "./Layout";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));
