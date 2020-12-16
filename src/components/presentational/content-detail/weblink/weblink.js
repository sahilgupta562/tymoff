import React, { PureComponent } from "react";
import { get } from "lodash";
import { LazyImage, VideoPlayer } from "../../../containers";
import "./weblink.scss";
import { WebLink } from "../../../../icons";
import { isValidYoutubeUrl } from "../../../../core";

export default class Video extends PureComponent {
  getValidUrl = (url) => {
    if (!/^((http|https|ftp):\/\/)/.test(url)) {
      url = "http://" + url;
    }
    return url;
  };

  onStartVideo = () => {
    const { stopScrollTimer } = this.props;
    stopScrollTimer();
  };

  onEndedVideo = () => {
    const { startScrollTimer, commentBox, contentAlreadyVisited } = this.props;
    !commentBox && !contentAlreadyVisited && startScrollTimer();
  };

  onPlayVideo = () => {
    const { stopScrollTimer } = this.props;
    stopScrollTimer();
  };

  renderImage = () => {
    const { activeContent } = this.props;
    const contentUrl = get(activeContent, "contentUrl", []);
    return <LazyImage containerStyle={{ height: "140px", width: "100%" }} style={{ height: "140px", width: "100%" }} alt={"alt"} src={contentUrl[0].thumbnailImage} thumbnail={""} />;
  };
  render() {
    const { activeContent } = this.props;
    const contentUrl = get(activeContent, "contentUrl", []);
    const hasYoutubeVideo = contentUrl[0].url ? isValidYoutubeUrl(contentUrl[0].url) : false;
    return (
      <div className="image-text text-box-popup web-light">
        {!hasYoutubeVideo && this.renderImage()}
        {hasYoutubeVideo ? (
          <div className="iframe-container">
            {/* <iframe title="Youtube" className="embed-responsive-item" src={contentUrl[0].url.replace("watch?v=", "embed/")}></iframe> */}
            <VideoPlayer
              url={contentUrl[0].url.replace("watch?v=", "embed/")}
              onStart={this.onStartVideo}
              onEnded={this.onEndedVideo}
              onPlay={this.onPlayVideo}
              playing
              controls
              config={{
                youtube: {
                  playerVars: { showinfo: 1 },
                },
              }}
            />
          </div>
        ) : (
          <div className="lb-webcard">
            <h3>{activeContent.contentTitle}</h3>
            <span>{activeContent.contentValue}</span>
            <div className="web-gradient"></div>
            <div className="web-icon">
              <a href={this.getValidUrl(contentUrl[0].url)} target="_blank" rel="noopener noreferrer">
                <WebLink width={"16px"} height={"16px"} className="web-link" />
                <span>Visit</span>
              </a>
            </div>
            {/* {contentList.length > 1 && <ContentArrow />} */}
          </div>
        )}
      </div>
    );
  }
}
