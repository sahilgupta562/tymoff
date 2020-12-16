import React, { PureComponent } from "react";
import { ListItem, List } from "@material-ui/core";
import { kFormatter } from "../../../core";
import { Like, Comment, Share, Download, MoreOption, Report } from "../../../icons";
import { ModalType, ContentUserAction, ContentTypeId, ShareType, SelectedText } from "../../../constant";
import "./content-detail-footer.scss";

export default class ContentDetailFooter extends PureComponent {
  handleCommentClick = () => {
    const { commentBox, showCommentBox, hideCommentBox, isLoggedIn, openModal, loadFromSession ,showSelectedText} = this.props;
    if (!loadFromSession) {
      if (isLoggedIn) commentBox ? hideCommentBox() : showCommentBox();
      else {
        openModal(ModalType.LOGIN);
        showSelectedText(SelectedText.COMMENT_TEXT);
      }  }
  };
  handleShareClick = () => {
    const { openModal, loadFromSession, setShareType } = this.props;
    if (!loadFromSession) {
      setShareType(ShareType.CONTENT);
      openModal(ModalType.SHARE);
    }
  };

  handleLikeClick = (isLike) => {
    const { setContentUserAction, isLoggedIn, openModal, loadFromSession ,showSelectedText} = this.props;
    if (!loadFromSession) {
      if (isLoggedIn) isLike ? setContentUserAction(ContentUserAction.UNLIKE) : setContentUserAction(ContentUserAction.LIKE);
      else {
        openModal(ModalType.LOGIN);
        showSelectedText(SelectedText.LIKE_TEXT);
      }
      }
  };

  handleMoreOptionClick = (e) => {
    const { openModal, modal, closeModal, loadShareLink, stopScrollTimer, startScrollTimer, loadFromGrid, contentAlreadyVisited, loadFromSession, setShareType } = this.props;
    if (!loadFromSession) {
      if (modal) {
        loadFromGrid && !contentAlreadyVisited && startScrollTimer();
        closeModal(ModalType.MORE_OPTION);
      } else {
        setShareType(ShareType.CONTENT);
        loadShareLink();
        loadFromGrid && stopScrollTimer();
        openModal(ModalType.MORE_OPTION);
      }
    }
  };

  isMyPost = () => {
    const { isLoggedIn, activeContent, user } = this.props;
    if (isLoggedIn) {
      const { userId } = activeContent,
        { id } = user;
      if (userId === id) return true;
      else return false;
    }
    return false;
  };

  handleReportContent = () => {
    const { openModal, isLoggedIn, loadFromSession ,setErrorMessage} = this.props;
    if (!loadFromSession) {
      this.handleClose();
      if (isLoggedIn){
        const isMyPost = this.isMyPost();
        isMyPost ? setErrorMessage("You can't report your own content") :  openModal(ModalType.REPORT_CONTENT);
      }
      else openModal(ModalType.LOGIN);
    }
  };

  handleDownloadedContent = () => {
    const { isLoggedIn, openModal, downloadFile, activeContent, loadFromSession, setErrorMessage ,showSelectedText} = this.props;
    if (!loadFromSession) {
      if (activeContent.typeId === ContentTypeId.Images || activeContent.typeId === ContentTypeId.Videos) {
        if (isLoggedIn) downloadFile();
        else {
           openModal(ModalType.LOGIN);
           showSelectedText(SelectedText.DOWNLOAD_TEXT);
          }
          } else {
        setErrorMessage("This content can't be downloaded");
      }
    }
  };

  handleClose = () => {
    const { closeModal } = this.props;
    closeModal(ModalType.MORE_OPTION);
  };

  render() {
    const { activeContent, modal } = this.props;
    return (
      <div className="image-icon-text">
        <div className="image-text web imgwithtext">
          <div className="description">
            <input type="checkbox" className="read-more" id="read-more1" />
            <p className="view-more"></p>
          </div>
        </div>
        <List className={`img-icon ${modal ? "active" : ""}`}>
          <ListItem onClick={() => this.handleLikeClick(activeContent.isLike)} className="s-like">
            <Like width={"16px"} height={"14px"} className={activeContent.isLike ? "like-active" : "like-inactive-content"} />
            <span>{kFormatter(activeContent.likeCount)}</span>
            <span className="tab-hidden">Likes</span>
          </ListItem>
          <ListItem onClick={this.handleCommentClick} className="comment">
            <Comment width={"16px"} height={"16px"} className="comment-content" />
            <span className="tab-hidden">Comments</span>
          </ListItem>
          <ListItem className="download" onClick={this.handleDownloadedContent}>
            <Download width={"16px"} height={"16px"} className="download-content" />
            <span className="tab-hidden">Download</span>
          </ListItem>
          <ListItem onClick={this.handleShareClick} className="share">
            <Share width={"16px"} height={"16px"} className="share-content" />
          </ListItem>
          <ListItem onClick={this.handleReportContent} className="report tab-hidden">
            <Report width={"16px"} height={"16px"} className="report" />
            <span className="tab-hidden">Report</span>
          </ListItem>
          <ListItem onClick={this.handleMoreOptionClick} className="more-icon">
            <MoreOption width={"16px"} height={"16px"} className="more-option-content" />
          </ListItem>
        </List>
      </div>
    );
  }
}
