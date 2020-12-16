import React, { PureComponent, Fragment } from "react";
import clsx from "clsx";
import { isMobile } from "react-device-detect";
import { Header, MobileNavigation } from "../../../components";
import { ModalType, ContentTypeId } from "../../../constant";
import { isServer } from "../../../store";
import { setGlobalThemeVariable } from "../../../core";
import Modal from "../../modal";
import RootRouter from "../Root-Router";
import "../index.css";
import "../modal.scss";
import "./layout.scss";

class Layout extends PureComponent {
  constructor(props) {
    super(props);
    const { history } = props;
    this.historyBlock = history.block((nextState, action) => this.routerWillLeave(nextState, action, this.props));
  }
  componentDidUpdate() {
    const { history } = this.props;
    history.block((nextState, action) => this.routerWillLeave(nextState, action, this.props));
  }
  routerWillLeave(nextState, action, props) {
    const {
      closeModal,
      isOtherModalOpen,
      contentModal,
      loginModal,
      commentBox,
      activeContent,
      hideCommentBox,
      moreOptionsModal,
      shareModal,
      copyLinkModal,
      reportContentModal,
      contentClose,
      editProfileModal,
      profileImageOptionModal,
      showMoreDetail,
      darkTheme,
    } = props;
    setGlobalThemeVariable(!darkTheme);
    if (action === "POP") {
      if (contentModal) {
        if (!isOtherModalOpen && !commentBox) {
          document.body.style.position = "";
          contentClose();
          closeModal(ModalType.CONTENT_DETAIL);
        } else {
          if (isOtherModalOpen || commentBox) {
            const { contentTitle, contentUrl, typeId, id } = activeContent;
            let title;
            if (typeId === ContentTypeId.Images || typeId === ContentTypeId.Videos) {
              title = contentTitle || contentUrl[0].contentOcr;
            } else {
              title = contentTitle;
            }
            const encryptedUrl = btoa(id);
            window.history.pushState("content detail", title, `/content/${encryptedUrl.replace(/=/g, "")}`);
          }
          loginModal && closeModal(ModalType.LOGIN);
          commentBox && hideCommentBox();
          moreOptionsModal && closeModal(ModalType.MORE_OPTION);
          shareModal && closeModal(ModalType.SHARE);
          copyLinkModal && closeModal(ModalType.COPY_LINK);
          reportContentModal && closeModal(ModalType.REPORT_CONTENT);
          showMoreDetail && closeModal(ModalType.SHOW_MORE_DETAIL);
          return false;
        }
      } else {
        contentClose();
        profileImageOptionModal && closeModal(ModalType.PROFILE_IMAGE_OPTION);
        shareModal && closeModal(ModalType.SHARE);
        if (editProfileModal) {
          closeModal(ModalType.EDIT_PROFILE);
          return false;
        } else return true;
      }
    } else if (action === "PUSH") {
      document.body.style.position = "";
      const { navlinkChange } = props;
      navlinkChange();
      return true;
    } else {
      return true;
    }
  }
  componentWillUnmount() {
    this.historyBlock();
  }
  render() {
    const { sidebar } = this.props;
    return (
      <Fragment>
        {!isServer && <Header />}
        {!isServer && <Modal />}
        <div
          className={clsx("container", {
            drawerOpen: sidebar,
            drawerClose: !sidebar,
          })}
        >
          <RootRouter />
        </div>
        {isMobile && <MobileNavigation />}
      </Fragment>
    );
  }
}

export default Layout;
