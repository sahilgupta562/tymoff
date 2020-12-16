import React, { PureComponent } from "react";
import { List, ListItem, Dialog, DialogTitle } from "@material-ui/core";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Offline, Online } from "react-detect-offline";
import { ModalType, CopyLinkMessage, SelectedText } from "../../../../constant";
import "./content-more-options.scss";
import { Link, Hide, Report } from "../../../../icons";

export default class ContentMoreOptions extends PureComponent {
  handleClose = () => {
    const { closeModal, startScrollTimer, loadFromGrid, isOtherModalOpen, contentAlreadyVisited, commentBox } = this.props;
    loadFromGrid && !isOtherModalOpen && !contentAlreadyVisited && !commentBox && startScrollTimer();
    closeModal(ModalType.MORE_OPTION);
  };

  handleCopyLink = () => {
    const { setMessage } = this.props;
    this.handleClose();
    setMessage(CopyLinkMessage.COPY_LINK)
  };

  handleReportContent = () => {
    const { openModal, isLoggedIn, setErrorMessage, showSelectedText } = this.props;
    this.handleClose();
    if (isLoggedIn) {
      const isMyPost = this.isMyPost();
      isMyPost ? setErrorMessage("You can't report your own content") : openModal(ModalType.REPORT_CONTENT);
    } else {
      openModal(ModalType.LOGIN);
      showSelectedText(SelectedText.REPORT_POST_TEXT)
    }
  };

  handleHideContent = () => {
    const { hideContent, isLoggedIn, openModal, commentBox, hideCommentBox, setErrorMessage, showSelectedText } = this.props;
    if (isLoggedIn) {
      if (commentBox) hideCommentBox();
    }
    this.handleClose();
    if (isLoggedIn) {
      const isMyPost = this.isMyPost();
      isMyPost ? setErrorMessage("You can't hide your own content") : hideContent();
    } else {
      openModal(ModalType.LOGIN);
      showSelectedText(SelectedText.HIDE_POST_TEXT)
    }
  };

  handleNoInternet = () => {
    const { setErrorMessage } = this.props;
    this.handleClose();
    setErrorMessage("No internet connection");
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

  render() {
    const { modal, shareLink } = this.props;
    return (
      <Dialog open={modal} className="web-more-link" onClose={this.handleClose} aria-labelledby="more-options" style={{ zIndex: 1300 }}>
        <DialogTitle id="more-options">More Options</DialogTitle>
        <List>
          <CopyToClipboard text={shareLink} onCopy={this.handleCopyLink}>
            <ListItem button>
              <Link width={"16"} height={"20"} className="link" />
              <div className="link-text">
                <p>Copy Link</p>
                <span>Add this link to your post</span>
              </div>
            </ListItem>
          </CopyToClipboard>
          <Online>
            <ListItem button onClick={this.handleHideContent}>
              <Hide width={"16"} height={"20"} className="hide" />
              <div className="link-text">
                <p>Hide Post</p>
                <span>Don't want to see this post</span>
              </div>
            </ListItem>
            <ListItem button onClick={this.handleReportContent} className="mobile-hidden">
              <Report width={"16"} height={"20"} className="report" />
              <div className="link-text">
                <p>Report</p>
                <span>This post is objectionable</span>
              </div>
            </ListItem>
          </Online>
          <Offline>
            <ListItem button onClick={this.handleNoInternet}>
              <Hide width={"16"} height={"20"} className="hide" />
              <div className="link-text">
                <p>Hide Post</p>
                <span>Don't want to see this post</span>
              </div>
            </ListItem>
            <ListItem button onClick={this.handleNoInternet} className="mobile-hidden">
              <Report width={"16"} height={"20"} className="report" />
              <div className="link-text">
                <p>Report</p>
                <span>This post is objectionable</span>
              </div>
            </ListItem>
          </Offline>
        </List>
      </Dialog>
    );
  }
}
