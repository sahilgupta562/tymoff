import { connect } from "react-redux";
import { default as Notifications } from "./notifications";

const mapStateToProps = state => ({ notifications: state.notification.data });

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
