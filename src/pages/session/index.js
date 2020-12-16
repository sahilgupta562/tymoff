import { connect } from "react-redux";
import { default as Session } from "./Session";
import { loadSession } from "../../store";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  loadSession: () => dispatch(loadSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(Session);
