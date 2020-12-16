import React, { PureComponent, Fragment } from "react";
import { get } from "lodash";
import { ButtonBase } from "@material-ui/core";
import Parser from "html-react-parser";
import { LazyImage, CardFooter } from "../../containers";
import { ContentTypeId, Fonts, ModalType } from "../../../constant";
import { WebLink, Play, Album, Gif } from "../../../icons";
import { isMobile } from "react-device-detect";
import sessionImage from "../../../assets/images/blank.jpg";
import "./card.scss";
import { isServer } from "../../../store";

class Card extends PureComponent {
  handleContentClick = (contentId, index) => {
    const { setActiveContentIndex, openModal, loadFromSession, setInitialSlide, contentOpen } = this.props;
    const encryptedUrl = btoa(contentId);
    if (!loadFromSession) {
      contentOpen();
      setActiveContentIndex(index);
      setInitialSlide(index);
      openModal(ModalType.CONTENT_DETAIL);
      window.history.pushState("content detail", "tymoff", `/content/${encryptedUrl.replace(/=/g, "")}`);
    } else window.open(`/content/${encryptedUrl.replace(/=/g, "")}`, "_self");

    if (isMobile) document.body.style.position = "fixed";
  };

  calculateHeight = (contentUrl, isContainer) => {
    const dimensions = !!contentUrl.length && contentUrl[0].dimensions && contentUrl[0].dimensions.split("x");
    const fixWidth = isMobile ? window.innerWidth * (48 / 100) : 250;
    const height = dimensions && !!dimensions.length ? Math.floor(fixWidth * (dimensions[1] / dimensions[0])) : 250;
    console.log(height, contentUrl);
    return `${isContainer ? height + 30 : height}px`;
  };

  renderImage = content => {
    const { contentUrl, typeId } = content;
    const { thumbnailImage, contentOcr, url } = contentUrl[0] || {};
    const src = typeId === ContentTypeId.Images ? thumbnailImage || url : thumbnailImage;
    const fullImage = typeId === ContentTypeId.Images ? url : thumbnailImage;
    let height;
    if (!isServer) {
      height = this.calculateHeight(contentUrl);
    } else {
      height = "500px";
    }
    return (
      <Fragment>
        {content.typeId !== ContentTypeId.Text ? (
          <LazyImage containerStyle={{ height: height }} style={{ height: height }} alt={contentOcr ? contentOcr.replace(/(?:\r\n|\r|\n)/g, " ") : "tymoff"} src={src} fullImage={fullImage} />
        ) : null}
      </Fragment>
    );
  };

  renderSessionImage = content => {
    const { contentUrl } = content;
    const { contentOcr } = contentUrl[0] || {};
    const fixWidth = isMobile ? window.innerWidth * (48 / 100) : 250;
    const height = `${Math.floor(fixWidth * (432 / 576))}px`;
    return <LazyImage containerStyle={{ height: height }} style={{ height: height }} alt={contentOcr ? contentOcr.replace(/(?:\r\n|\r|\n)/g, " ") : "tymoff"} src={sessionImage} />;
  };

  renderAnchorTag = (content, loadFromSession) => {
    const { contentUrl } = content;
    const { contentOcr } = contentUrl[0] || {};
    const encryptedUrl = btoa(content.id);
    return (
      <a
        href={`https://www.tymoff.com/content/${encryptedUrl.replace(/=/g, "")}`}
        style={{ display: loadFromSession ? "" : "none" }}
        title={contentOcr ? contentOcr.replace(/(?:\r\n|\r|\n)/g, " ") : `https://www.tymoff.com/content/${encryptedUrl.replace(/=/g, "")}`}
        target={"_self"}
        rel="noopener noreferrer"
      >
        {contentOcr ? contentOcr.replace(/(?:\r\n|\r|\n)/g, " ") : `https://www.tymoff.com/content/${encryptedUrl.replace(/=/g, "")}`}
      </a>
    );
  };

  calculateContainerHeight = content => {
    const { contentUrl } = content;
    let height;
    if (!isServer) {
      height = this.calculateHeight(contentUrl, true);
    } else {
      height = "500px";
    }
    return height;
  };

  calculateSessionContainerHeight = () => {
    let height;
    if (!isServer) {
      const fixWidth = isMobile ? window.innerWidth * (48 / 100) : 250;
      const heightContainer = Math.floor(fixWidth * (432 / 576));
      height = `${heightContainer + 30}px`;
    } else {
      height = "500px";
    }
    return height;
  };

  renderContentText = content => {
    const { contentValue, id, typeId } = content;
    const index = id % Fonts.length;
    const font = Fonts[index];
    const maxContent = contentValue && contentValue.length > 200 ? contentValue.substring(0, 200) : contentValue;
    return (
      <Fragment>
        {typeId === ContentTypeId.Text ? (
          <div className="description" id={`text_${id}`}>
            <span style={{ fontFamily: font, fontSize: 16 }}>{Parser(content.contentTitle)}</span>
            <span style={{ fontFamily: font, fontSize: 16 }} className="view-more">
              {Parser(maxContent)}
            </span>
          </div>
        ) : null}
      </Fragment>
    );
  };

  render() {
    const { content, contentIndex, loadFromSession } = this.props;
    const contentUrl = get(content, "contentUrl", []);
    const gif = "gif";
    return (
      <div className="card-style" style={{ height: !loadFromSession ? this.calculateContainerHeight(content) : this.calculateSessionContainerHeight() }}>
        <ButtonBase onClick={() => this.handleContentClick(content.id, contentIndex)} style={{ width: "100%" }}>
          {content.typeId === ContentTypeId.Videos && <Play width={"40px"} height={"40px"} className="play play-icon" />}
          {!loadFromSession && this.renderImage(content)}
          {loadFromSession && this.renderSessionImage(content)}
          {this.renderContentText(content)}
          {content.typeId === ContentTypeId.Weblink && (
            <div className="brand-link">
              <a target="_blank" rel="noopener noreferrer" href={contentUrl[0].url}>
                <WebLink width={"16px"} height={"16px"} className="web-link" />
              </a>
            </div>
          )}
          {content.typeId === ContentTypeId.Images && contentUrl.length > 1 && (
            <div className="brand-link">
              <Album width={"16px"} height={"16px"} className="album" />
            </div>
          )}
          {!!content.contentUrl[0] && content.contentUrl[0].thumbnailImage &&
            (content.typeId === ContentTypeId.Images) && content.contentUrl[0].thumbnailImage.split(".")[3] === gif &&
            <div className="brand-link">
              <Gif width={"16px"} height={"16px"} className="gif" />
            </div>
          }
        </ButtonBase>
        {this.renderAnchorTag(content, loadFromSession)}
        {!!content.contentTitle && content.typeId === ContentTypeId.Weblink &&
          <div className="webTitle">  <ButtonBase onClick={() => this.handleContentClick(content.id, contentIndex)}> {Parser(content.contentTitle)}</ButtonBase></div>}
        {!!content.contentValue &&
          (content.typeId === ContentTypeId.Images || content.typeId === ContentTypeId.Videos || content.typeId === ContentTypeId.Weblink) &&
          (content.contentValue.length > 50 ? (
            <span onClick={() => this.handleContentClick(content.id, contentIndex)} className="readMore">
              {Parser(content.contentValue.substr(0, 50))}
            </span>
          ) : (
              <span onClick={() => this.handleContentClick(content.id, contentIndex)} className="readMore">
                {Parser(content.contentValue)}
              </span>
            ))}

        <CardFooter content={content} contentIndex={contentIndex} />
      </div>
    );
  }
}

export default Card;
