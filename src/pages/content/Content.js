import React, { PureComponent, Fragment } from "react";
import { isEmpty } from "lodash";
import { Link } from "react-router-dom";
import IntervalTimer from "react-interval-timer";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { Slider } from "../../modules";
import { ContentDetailFooter, ContentDetail, Comment, TabActivity, ContentArrow } from "../../components";
import { ContentTypeId, ModalType } from "../../constant";
import { UniqueTag, VideoJsonLD } from "../../jsonLD";
import { isServer } from "../../store";
import { isInteger, setGlobalThemeVariable } from "../../core";
import "./content.scss";
import { Logo } from "../../icons";
import Parser from "html-react-parser";
import { ButtonBase } from "@material-ui/core";

class Content extends PureComponent {
  constructor(props) {
    super(props);
    const { loadFromGrid, loadContentDetail, match, startScrollTimer, contentOpen, darkTheme } = props;
    setGlobalThemeVariable(!darkTheme);
    if (!loadFromGrid && !isServer) {
      contentOpen();
      const { params } = match;
      let contentId = params.contentId;
      if (!isInteger(params.contentId)) {
        try {
          contentId = atob(params.contentId);
        } catch (error) {
          contentId = "";
        }
      }
      loadContentDetail(contentId);
      startScrollTimer();
    }
  }

  handleContentAutoScroll = () => {
    const { totalContent, activeContentIndex, setActiveContentIndex, stopScrollTimer, showNextArrow, hideNextArrow } = this.props;
    showNextArrow();
    setTimeout(() => {
      stopScrollTimer();
      if (!!(activeContentIndex + 1 < totalContent)) {
        setActiveContentIndex(activeContentIndex + 1);
        this.slider && this.slider.slickNext();
      }
      hideNextArrow();
    }, 2000);
  };

  handleOnClose = () => {
    const { history, hideCommentBox, isOtherModalOpen, contentClose } = this.props;
    if (!isOtherModalOpen) {
      contentClose();
      hideCommentBox();
      history.push("/");
    }
    !isServer && (document.body.className = "");
  };

  renderUniqueTag = () => {
    const { activeContent } = this.props;
    if (!isEmpty(activeContent)) {
      const { contentTitle, contentValue, contentUrl, typeId, id, synonym } = activeContent;
      const description = typeId === ContentTypeId.Images ? contentUrl[0].contentOcr : contentValue;
      const encryptedUrl = btoa(id);
      const contentUniqueUrl = `https://www.tymoff.com/content/${encryptedUrl.replace(/=/g, "")}`;
      let contentImageUrl;
      let title;
      if (typeId === ContentTypeId.Images || typeId === ContentTypeId.Videos) {
        contentImageUrl = typeId === ContentTypeId.Images ? contentUrl[0].url : contentUrl[0].thumbnailImage;
        title = contentTitle || contentUrl[0].contentOcr;
        if (!title) {
          // title = `Best ${typeId === ContentTypeId.Images ? "images" : "videos"} on tymoff`;
          title = "Let's take some týmoff"
        }
      } else {
        contentImageUrl = "https://www.tymoff.com/logo.png";
        title = contentTitle;
        if (!title) {
          // title = `Best ${typeId === ContentTypeId.Text ? "content" : "articles"} on tymoff`;
          title = "Let's take some týmoff"
        }
      }
      return (
        <UniqueTag
          Synonym={synonym}
          Title={title.substring(0, 50).replace(/(?:\r\n|\r|\n)/g, " ") || "tymoff"}
          ContentUrl={contentUniqueUrl}
          Description={description ? description.substring(0, 150).replace(/(?:\r\n|\r|\n)/g, " ") : "tymoff"}
          ContentImageUrl={contentImageUrl}
        />
      );
    } else return null;
  };

  renderVideoTag = () => {
    const { activeContent } = this.props;
    if (!isEmpty(activeContent)) {
      const { contentTitle, contentValue, contentUrl, typeId, id, modifiedTime } = activeContent;
      if (typeId === ContentTypeId.Videos) {
        const description = contentUrl[0].contentOcr || contentValue;
        let title = contentTitle || contentUrl[0].contentOcr;
        const encryptedUrl = btoa(id);
        const contentUniqueUrl = `https://www.tymoff.com/content/${encryptedUrl.replace(/=/g, "")}`;
        const contentImageUrl = contentUrl[0].thumbnailImage;
        if (!title) {
          title = "Best videos on tymoff";
        }
        return (
          <VideoJsonLD
            ContentUrl={contentUniqueUrl}
            Title={title.substring(0, 50).replace(/(?:\r\n|\r|\n)/g, " ")}
            ContentImageUrl={contentImageUrl}
            Description={description ? description.substring(0, 150).replace(/(?:\r\n|\r|\n)/g, " ") : "Best videos on tymoff"}
            EmbedUrl={contentUniqueUrl}
            UploadDate={modifiedTime}
          />
        );
      } else {
        return null;
      }
    } else return null;
  };

  moveNext = () => {
    const { totalContent, activeContentIndex } = this.props;
    if (!!(activeContentIndex + 1 < totalContent)) {
      this.slider.slickNext();
    }
  };

  movePrev = () => {
    const { activeContentIndex } = this.props;
    if (activeContentIndex > 0) {
      this.slider.slickPrev();
    }
  };

  beforeChange = (current, next) => {
    const { setActiveContentIndex, activeContentIndex } = this.props;
    activeContentIndex !== next && setActiveContentIndex(next);
  };
  afterChange = (current) => {
    const { activeContent } = this.props;
    const encryptedUrl = btoa(activeContent.id);
    window.history.replaceState("content detail", "tymoff", `/content/${encryptedUrl.replace(/=/g, "")}`);
  };

  getSliderSettings = (activeContentIndex, commentBox) => {
    return {
      dots: false,
      infinite: false,
      speed: 500,
      lazyLoad: !!(activeContentIndex === 0),
      slidesToShow: 1,
      vertical: true,
      initialSlide: 0,
      touchMove: !commentBox,
      focusOnSelect: true,
      verticalSwiping: true,
      touchThreshold: 5000,
      arrows: false,
      accessibility: true,
      draggable: true,
      beforeChange: (current, next) => this.beforeChange(current, next),
      afterChange: (current, next) => this.afterChange(current, next),
    };
  };

  render() {
    !isServer && document.body.classList.add("prevent-scroll");
    const { contentList, activeContentIndex, commentBox, loadFromSession, activeContent, openModal, isScrollTimerEnable: enabled, currentScrollTime } = this.props;
    const settings = this.getSliderSettings(activeContentIndex, commentBox);
    const timeout = currentScrollTime > 5000 ? +(currentScrollTime - 2000) : 5000;
    return (
      <ReactScrollWheelHandler upHandler={this.movePrev} downHandler={this.moveNext}>
        <div className="contentPage" style={{ display: isServer ? "none" : "" }}>
          <TabActivity />
          {loadFromSession && (
            <div className="session-detail" style={{ zIndex: 10, position: "absolute", textAlign: "center" }}>
              <Fragment>
                <Link to="/">
                  <Logo width={"80px"} height={"24px"} className={`logo-original`} />
                </Link>
                <a href="https://www.tymoff.com/categories/travel">Travel</a>
                <a href="https://www.tymoff.com/categories/motivational">Motivational</a>
                <a href="https://www.tymoff.com/categories/humor">Humour</a>
                <a href="https://www.tymoff.com/categories/creativity">Creativity</a>
                <a href="https://www.tymoff.com/categories/business">Business</a>
                <a href="https://www.tymoff.com/categories/technology">Technology</a>
                <a href="https://www.tymoff.com/categories/sports">Sports</a>
              </Fragment>
            </div>
          )}
          {this.renderVideoTag()}
          {this.renderUniqueTag()}
          <IntervalTimer timeout={timeout} callback={() => this.handleContentAutoScroll()} enabled={enabled && !!currentScrollTime} repeat={false} />
          {!!contentList.length && (
            <Slider {...settings} ref={(slider) => (this.slider = slider)} className={commentBox ? "modal-content comment-active" : "modal-content"}>
              {contentList.map((content, index) => (
                <div key={index} className={`image-container ${loadFromSession ? "session-container" : ""}`}>
                  <button className="closeBtn mobile-hidden" onClick={this.handleOnClose}></button>
                  <button className="back-btn tab-hidden" onClick={this.handleOnClose}></button>
                  <div className="image-wrapper">
                    <ContentDetail content={content} contentId={content.id} />
                    <ContentDetailFooter />
                    {!!activeContent.contentValue && (activeContent.typeId === ContentTypeId.Images || activeContent.typeId === ContentTypeId.Videos) && (
                      <span className="detail-desc">{Parser(activeContent.contentValue).length > 100 ? Parser(activeContent.contentValue.substr(0, 100)) : Parser(activeContent.contentValue)}</span>
                    )}
                    {!!activeContent.contentValue &&
                      (activeContent.typeId === ContentTypeId.Images || activeContent.typeId === ContentTypeId.Videos) &&
                      Parser(activeContent.contentValue).length > 100 && (
                        <ButtonBase className="view-more" onClick={() => openModal(ModalType.SHOW_MORE_DETAIL)}>
                          See more
                        </ButtonBase>
                      )}
                    {contentList.length > 1 && <ContentArrow />}
                  </div>
                </div>
              ))}
            </Slider>
          )}
          {commentBox && <Comment />}
        </div>
      </ReactScrollWheelHandler>
    );
  }
}

export default Content;
