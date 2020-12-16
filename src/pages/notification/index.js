import { connect } from "react-redux";
import { default as Notification } from "./Notification";

const mapStateToProps = state => ({ notifications: state.notification.data });

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
