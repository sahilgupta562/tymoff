import { COMMENT } from "./action-types";

const loadComment = () => ({
  type: COMMENT.LOAD
});

const clearComment = () => ({
  type: COMMENT.CLEAR
});

const setComment = comments => ({
  type: COMMENT.LOAD_SUCCESS,
  comments
});

const setCommentError = error => ({
  type: COMMENT.LOAD_FAILED,
  error
});

const setTotalComment = totalComment => ({
  type: COMMENT.TOTAL_COMMENT,
  totalComment
});

const setCommentText = commentText => ({
  type: COMMENT.COMMENT_TEXT_CHANGE,
  commentText
});

const addComment = () => ({
  type: COMMENT.ADD
});

const clearCommentText = () => ({
  type: COMMENT.CLEAR_COMMENT_TEXT
});

const newCommentLoad = () => ({
  type: COMMENT.NEW_COMMENT_LOAD
});

export { loadComment, clearComment, setComment, setCommentError, setTotalComment, setCommentText, addComment, clearCommentText ,newCommentLoad};
