/* eslint-disable */
import React, { PureComponent, Fragment } from "react";
import { Link } from "react-router-dom";
import { Dialog, Slide, ClickAwayListener, ButtonBase } from "@material-ui/core";
import Parser from "html-react-parser";
import IntervalTimer from "react-interval-timer";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { ModalType, ContentTypeId } from "../../../../constant";
import { UniqueTag, VideoJsonLD } from "../../../../jsonLD";
import { Slider } from "../../../../modules";
import { ContentDetailFooter, TabActivity, ContentArrow } from "../../../containers";
import Comment from "../../comment";
import ContentDetail from "../../content-detail";
import { Logo } from "../../../../icons";
import "./content-modal.scss";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default class ContentModal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { lazyLoad: true };
    const { loadFromGrid, loadContentDetail, match } = props;
    if (!loadFromGrid) {
      const { params } = match;
      loadContentDetail(params.contentId);
    }
  }

  handleOnClose = () => {
    document.body.style.position = "";
    const { loadFromGrid, history, hideCommentBox, closeModal, isOtherModalOpen, contentClose } = this.props;
    if (!isOtherModalOpen) {
      hideCommentBox();
      contentClose();
      closeModal(ModalType.CONTENT_DETAIL);
      loadFromGrid && history.goBack();
    }
  };

  handleContentAutoScroll = () => {
    const { totalContent, activeContentIndex, setActiveContentIndex, stopScrollTimer, hideNextArrow, showNextArrow } = this.props;
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

  renderUniqueTag = () => {
    const { activeContent, genres } = this.props;
    const selectedCategory = genres.filter((gen) => gen.id == activeContent.catId);
    const { contentTitle, contentValue, contentUrl, typeId, id } = activeContent;
    const description = typeId === ContentTypeId.Images ? contentUrl[0].contentOcr : contentValue;
    const encryptedUrl = btoa(id);
    const contentUniqueUrl = `https://www.tymoff.com/content/${encryptedUrl.replace(/=/g, "")}`;
    let contentImageUrl;
    let title;
    if (typeId === ContentTypeId.Images || typeId === ContentTypeId.Videos) {
      contentImageUrl = typeId === ContentTypeId.Images ? contentUrl[0].url : contentUrl[0].thumbnailImage;
      title = contentTitle || contentUrl[0].contentOcr;
      if (!title) {
        // title = !!selectedCategory.length ? `Best ${selectedCategory[0].name} on tymoff` : `Best ${typeId === ContentTypeId.Images ? "images" : "videos"} on tymoff`;
        title = "Let's take some týmoff"
      }
    } else {
      contentImageUrl = "https://www.tymoff.com/logo.png";
      title = contentTitle;
      if (!title) {
        //title = !!selectedCategory.length ? `Best ${selectedCategory[0].name} on tymoff` : `Best ${typeId === ContentTypeId.Text ? "content" : "articles"} on tymoff`;
        title = "Let's take some týmoff"
      }
    }
    return (
      <UniqueTag
        Title={title.substring(0, 50).replace(/(?:\r\n|\r|\n)/g, " ") || "tymoff"}
        ContentUrl={contentUniqueUrl}
        Description={description ? description.substring(0, 150).replace(/(?:\r\n|\r|\n)/g, " ") : "tymoff"}
        ContentImageUrl={contentImageUrl}
      />
    );
  };

  renderVideoTag = () => {
    const { activeContent, genres } = this.props;
    const { contentTitle, contentValue, contentUrl, typeId, id, modifiedTime } = activeContent;
    if (typeId === ContentTypeId.Videos) {
      const selectedCategory = genres.filter((gen) => gen.id == activeContent.catId);
      const description = contentUrl[0].contentOcr || contentValue;
      let title = contentTitle || contentUrl[0].contentOcr;
      const encryptedUrl = btoa(id);
      const contentUniqueUrl = `https://www.tymoff.com/content/${encryptedUrl.replace(/=/g, "")}`;
      const contentImageUrl = contentUrl[0].thumbnailImage;
      if (!title) {
        title = !!selectedCategory.length ? `Best ${selectedCategory[0].name} on tymoff` : `Best ${typeId === ContentTypeId.Images ? "images" : "videos"} on tymoff`;
      }
      return (
        <VideoJsonLD
          ContentUrl={contentUniqueUrl}
          Title={title.substring(0, 50).replace(/(?:\r\n|\r|\n)/g, " ")}
          ContentImageUrl={contentImageUrl}
          Description={description ? description.substring(0, 150).replace(/(?:\r\n|\r|\n)/g, " ") : "tymoff"}
          EmbedUrl={contentUniqueUrl}
          UploadDate={modifiedTime}
        />
      );
    } else {
      return null;
    }
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

  getSliderSettings = (initialSlide, activeContentIndex, commentBox) => {
    return {
      dots: false,
      infinite: false,
      speed: 500,
      lazyLoad: !!(initialSlide === activeContentIndex),
      slidesToShow: 1,
      vertical: true,
      initialSlide: initialSlide,
      touchMove: !commentBox,
      focusOnSelect: true,
      verticalSwiping: true,
      touchThreshold: 5000,
      waitForAnimate: false,
      arrows: false,
      beforeChange: (current, next) => this.beforeChange(current, next),
      afterChange: (current) => this.afterChange(current),
    };
  };

  render() {
    const { modal, contentList, initialSlide, commentBox, isScrollTimerEnable: enabled, currentScrollTime, loadFromSession, activeContentIndex, activeContent, openModal } = this.props;
    const settings = this.getSliderSettings(initialSlide, activeContentIndex, commentBox);
    const timeout = currentScrollTime > 5000 ? +(currentScrollTime - 2000) : 5000;
    return (
      <Dialog
        fullScreen
        open={modal}
        className="modal content-modal"
        onClose={this.handleOnClose}
        TransitionComponent={Transition}
        aria-labelledby="content-title"
        aria-describedby="content-description"
      >
        <ReactScrollWheelHandler upHandler={this.movePrev} downHandler={this.moveNext}>
          <div className="contentPage">
            <TabActivity />
            {loadFromSession && (
              <div className="session-detail">
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
            <IntervalTimer timeout={timeout} callback={() => this.handleContentAutoScroll()} enabled={enabled && currentScrollTime > 0} repeat={false} />
            <ClickAwayListener onClickAway={() => this.handleOnClose()}>
              <div className={commentBox ? "slider-container comment-active" : "slider-container"}>
                {!!contentList.length && (
                  <Slider allowMouseEvents={true} {...settings} ref={(slider) => (this.slider = slider)} className={commentBox ? "modal-content comment-active" : "modal-content"}>
                    {contentList.map((content, index) => (
                      <div key={index} className={`image-container ${loadFromSession ? "session-container" : ""}`} tabIndex="0">
                        <button className="closeBtn mobile-hidden" onClick={this.handleOnClose}></button>
                        <button className="back-btn tab-hidden" onClick={this.handleOnClose}></button>
                        <div className="image-wrapper">
                          <ContentDetail content={content} contentId={content.id} />
                          <ContentDetailFooter />
                          {!!activeContent.contentValue && (activeContent.typeId === ContentTypeId.Images || activeContent.typeId === ContentTypeId.Videos) && (
                            <span className="detail-desc">
                              {Parser(activeContent.contentValue).length > 100 ? Parser(activeContent.contentValue.substr(0, 100)) : Parser(activeContent.contentValue)}
                            </span>
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
            </ClickAwayListener>
          </div>
        </ReactScrollWheelHandler>
      </Dialog>
    );
  }
}
