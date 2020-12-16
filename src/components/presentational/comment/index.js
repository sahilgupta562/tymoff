import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as Comment } from "./comment";
import { hideCommentBox, addComment, setCommentText } from "../../../store";

const mapStateToProps = state => ({
  totalComment: state.comment.totalComment,
  comments: state.comment.data,
  user: state.auth.data,
  error: state.content.error,
  commentText: state.comment.commentText
});

const mapDispatchToProps = dispatch => ({
  hideCommentBox: () => dispatch(hideCommentBox()),
  addComment: () => dispatch(addComment()),
  setCommentText: commentText => dispatch(setCommentText(commentText))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Comment));
