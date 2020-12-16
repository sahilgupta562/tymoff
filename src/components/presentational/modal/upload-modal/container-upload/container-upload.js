import React, { PureComponent } from "react";
import ImageUpload from "../image-upload";
import VideoUpload from "../video-upload";
import StoryUpload from "../story-upload";
import WebUpload from "../web-upload";
import PublishAll from "../publish-all";
import { UploadTab } from "../../../../../constant";
import "./container-upload.scss";

export default class ContainerUpload extends PureComponent {
  render() {
    const { activeTab, setActiveTab, validateUpload, previewContents } = this.props;
    return (
      <div className="modalContent">
        <div className="modalHeader">
          <h3 id="transition-modal-title" className="modalTitle">
            Upload
          </h3>
          <div className="button-cat">
            <button className={`cat-btn mobile-hidden ${UploadTab.IMAGE === activeTab ? "active" : ""}`} onClick={() => setActiveTab(UploadTab.IMAGE)}>
              Images &amp; Album
            </button>
            <button className={`cat-btn tab-hidden ${UploadTab.IMAGE === activeTab ? "active" : ""}`} onClick={() => setActiveTab(UploadTab.IMAGE)}>
              Images 
            </button>
            <button className={`cat-btn ${UploadTab.VIDEO === activeTab ? "active" : ""}`} onClick={() => setActiveTab(UploadTab.VIDEO)}>
              Videos
            </button>
            <button className={`cat-btn ${UploadTab.STORY === activeTab ? "active" : ""}`} onClick={() => setActiveTab(UploadTab.STORY)}>
              Stories
            </button>
            <button className={`cat-btn ${UploadTab.WEB === activeTab ? "active" : ""}`} onClick={() => setActiveTab(UploadTab.WEB)}>
              Web Link
            </button>
          </div>
        </div>
        <div className="modalBody">
          {UploadTab.IMAGE === activeTab && <ImageUpload />}
          {UploadTab.VIDEO === activeTab && <VideoUpload />}
          {UploadTab.STORY === activeTab && <StoryUpload />}
          {UploadTab.WEB === activeTab && <WebUpload />}
          <button className="btn submit form-control" onClick={validateUpload}>
            Next
          </button>
          {/* <div className="pbar">
            <img src={footerLine} alt="" />
          </div> */}
        {!!previewContents.length && <PublishAll />}
        </div>
      </div>
    );
  }
}
