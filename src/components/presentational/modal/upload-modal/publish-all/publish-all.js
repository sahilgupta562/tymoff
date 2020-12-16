import React, { PureComponent, Fragment } from "react";
import { VideoPlayer } from "../../../../containers";
import { UploadTab } from "../../../../../constant";
import { UploadPlay, Album, WebLink, Edit } from "../../../../../icons";
import "./publish-all.scss";

export default class PublishAll extends PureComponent {
  renderImages = (content) => {
    return (
      <Fragment>
        <img src={content.prevFile} alt="" />
        <div className="card-overlay">
          <div className="brand-link">
            <Album width={"14px"} height={"14px"} className="album" />
          </div>
          {content.count > 1 && (
            <span>
              +{content.count}
              <i className="fa fa-file-image-o" aria-hidden="true" />
            </span>
          )}
        </div>
      </Fragment>
    );
  };

  renderVideos = (content) => {
    return (
      <Fragment>
        <VideoPlayer url={content.prevFile} height={"80px"} width={"80px"} />
        {/* <div className="card-overlay">{content.count > 1 && <span>+{content.count}</span>}</div> */}
        <div className="card-overlay">
          <div className="brand-link">
            <UploadPlay width={"20px"} height={"20px"} className="play play-icon" />
          </div>
          {content.count > 1 && <span>+{content.count}</span>}
        </div>
      </Fragment>
    );
  };

  renderWeblink = (content) => {
    return (
      <Fragment>
        <span>{content.des}</span>
        <div className="card-overlay">
          <div className="brand-link">
            <WebLink width={"14px"} height={"14px"} className="web-link" />
          </div>
        </div>
      </Fragment>
    );
  };

  renderText = (content) => {
    return (
      <Fragment>
        <span>{content.des}</span>
        <div className="card-overlay">
          <div className="brand-link">
            <Edit width={"14px"} height={"14px"} className="edit" />
          </div>
        </div>
      </Fragment>
    );
  };

  render() {
    const { contents, uploadContentDataList, isLoading } = this.props;
    return (
      <div className="component">
        <div className="publish-list">
          <h1 className="publish-title">Ready to Publish</h1>
          {contents.map((content, index) => (
            <div key={index} className="card">
              {UploadTab.IMAGE === content.activeTab && this.renderImages(content)}
              {UploadTab.VIDEO === content.activeTab && this.renderVideos(content)}
              {UploadTab.STORY === content.activeTab && this.renderText(content)}
              {UploadTab.WEB === content.activeTab && this.renderWeblink(content)}
            </div>
          ))}
        </div>
        <button disabled={isLoading} onClick={uploadContentDataList} className="btn submit form-control b-grey">
          Publish All
        </button>
      </div>
    );
  }
}
