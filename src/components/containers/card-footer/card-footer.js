import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { ButtonBase, Menu, MenuItem } from "@material-ui/core";
import { Like, Comment, Share, MoreOption } from "../../../icons";
import { styles } from "./card-footer.style";
import { kFormatter } from "../../../core";
import { ModalType, ContentAction, ShareType, DeletePost } from "../../../constant";
import "./card-footer.scss";

class CardFooter extends PureComponent {
  state = { anchorEl: null };

  handleClose = () => this.setState({ anchorEl: null });

  handleUploadedOptionClick = (event, content) => {
    const { setActiveContent } = this.props;
    setActiveContent(content);
    this.setState({ anchorEl: event.currentTarget });
  };

  handleShareClick = (modal, contentIndex) => {
    const { openModal, setActiveContentIndex, setShareType, setInitialSlide } = this.props;
    setShareType(ShareType.CONTENT);
    setActiveContentIndex(contentIndex);
    setInitialSlide(contentIndex);
    openModal(modal);
  };

  handleActionClick = (contentId, index) => {
    const { setActiveContentIndex, openModal, loadFromSession, setInitialSlide, contentOpen } = this.props;
    const encryptedUrl = btoa(contentId);
    if (!loadFromSession) {
      contentOpen();
      setActiveContentIndex(index);
      setInitialSlide(index);
      openModal(ModalType.CONTENT_DETAIL);
      window.history.pushState("content detail", "tymoff", `/content/${encryptedUrl.replace(/=/g, "")}`);
    } else window.open(`/content/${encryptedUrl.replace(/=/g, "")}`, "_self");
  };

  handleDeleteContent = () => {
    this.setState({ anchorEl: null });
    const { setAlertAction } = this.props;
    setAlertAction(DeletePost);
  };

  render() {
    const { classes, content, contentIndex, contentAction } = this.props;
    const { anchorEl } = this.state;
    return (
      <div className={classes.footer}>
        <ul className={classes.ul}>
          <li className="cardFooterli">
            <ButtonBase onClick={() => this.handleActionClick(content.id, contentIndex)}>
              <Like width={"16px"} height={"14px"} className={content.isLike ? "like-active" : "like-inactive"} />
              <span className={classes.likeCountStyle}>{kFormatter(content.likeCount)}</span>
            </ButtonBase>
          </li>
          <li className="cardFooterli">
            <ButtonBase onClick={() => this.handleActionClick(content.id, contentIndex)}>
              <Comment width={"14px"} height={"14px"} className="comment" />
            </ButtonBase>
          </li>
          <li className="cardFooterli">
            <ButtonBase onClick={() => this.handleShareClick(ModalType.SHARE, contentIndex)}>
              <span>{content.id}</span> &nbsp;
              <Share width={"14px"} height={"14px"} className="share" />
            </ButtonBase>
          </li>
          {contentAction === ContentAction.upload && (
            <Fragment>
              <li className="cardFooterli account-page-only">
                <ButtonBase onClick={event => this.handleUploadedOptionClick(event, content)} aria-controls="uploded_options">
                  <MoreOption width={"14px"} height={"14px"} className="more-option-content" />
                </ButtonBase>
              </li>
              <Menu id="uploded_options" className="delete-post-modal" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={this.handleClose}>
                <MenuItem onClick={this.handleDeleteContent}>Delete</MenuItem>
              </Menu>
            </Fragment>
          )}
        </ul>
      </div>
    );
  }
}
CardFooter.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(CardFooter);
