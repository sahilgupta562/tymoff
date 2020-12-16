import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as Weblink } from "./weblink";
import { startScrollTimer, stopScrollTimer } from "../../../../store";

const mapStateToProps = (state) => ({ 
    contentList: state.content.data,
    commentBox: state.ui.commentBox,
   contentAlreadyVisited: state.content.contentAlreadyVisited 
});

const mapDispatchToProps = (dispatch) => ({
  startScrollTimer: () => dispatch(startScrollTimer()),
  stopScrollTimer: () => dispatch(stopScrollTimer()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Weblink));
