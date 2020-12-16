import React, { PureComponent } from "react";
import { SignInUser, SendIcon } from "../../../icons";

import "./comment.scss";

export default class Comment extends PureComponent {
  onCommentSubmit = e => {
    e.preventDefault();
    const { addComment } = this.props;
    addComment();
  };
  render() {
    const { totalComment, comments, hideCommentBox, user, commentText, setCommentText } = this.props;
    const userProfilePic = user.picUrl ? <img src={user.picUrl} alt="" /> : <SignInUser width={"30px"} height={"30px"} className="signin-user" />;
    return (
      <div className="comment-container comment-animate">
        <div className="comment-head">
          <div className="user-img">{userProfilePic}</div>
          <div className="user-comment head">
            <h2 className="heading">
              <div> {!!user.name ? user.name : user.phone} </div>
            </h2>
          </div>
        </div>
        <div className="comment-count">
          <div className="col-md-6" onClick={hideCommentBox}>
            <span></span>
            {totalComment} comments
          </div>
        </div>
        <div className="comment-text-box-container">
          <div className="comment-text-box mobile-hidden">
            <div className="user-img">{userProfilePic}</div>
            <div className="user-comment edit-input">
              <form onSubmit={this.onCommentSubmit}>
                <input type="text" name="commentTyped" className="input-box" placeholder="Write a comment" autoComplete="off" onChange={e => setCommentText(e.target.value)} value={commentText} />
              </form>
            </div>
            <ul className="rply-like-time">
              <li className="input-msg">Press enter to post</li>
              <li></li>
            </ul>
          </div>
          <div className="comment-scroll">
            {comments.map((comment, index) => (
              <div className="comment-text-box" key={index}>
                <div className="user-img">{!!comment.user.picUrl ? <img src={comment.user.picUrl} alt="" /> : <SignInUser width={"30px"} height={"30px"} className="signin-user" />}</div>
                <div className="user-comment">
                  <h2 className="heading">{!!comment.user && !!comment.user.name ? comment.user.name : comment.user.phone}</h2>
                  <p>{comment.comments}</p>
                </div>
                <ul className="rply-like-time">
                  <li>{comment.commentText}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="comment-text-box mobile-comment tab-hidden">
          <div className="user-comment edit-input">
            <form onSubmit={this.onCommentSubmit}>
              <input type="text" name="commentTyped" className="input-box" placeholder="Write a comment" autoComplete="off" onChange={e => setCommentText(e.target.value)} value={commentText} />
            </form>
            <button className="send-icon" onClick={this.onCommentSubmit}>
              <SendIcon className="send" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
