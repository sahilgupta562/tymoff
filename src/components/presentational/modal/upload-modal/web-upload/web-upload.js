import React, { PureComponent } from "react";
import { isEmpty } from "lodash";
class WebUpload extends PureComponent {
  handleWeblinkChange = weblink => {
    const { setUploadWeblink, loadMetadata } = this.props;
    setUploadWeblink(weblink);
    loadMetadata();
  };
  render() {
    const { weblink, error, metaData } = this.props;
    return (
      <div className="description">
        <label className="upload-label">Web Url</label>
        <textarea type="text" placeholder="Type or paste URL here" className="upload-textarea" value={weblink} onChange={event => this.handleWeblinkChange(event.target.value)}></textarea>
        <span className="error">{error}</span>
        <div className="site-desc" contentEditable="false" data-text="Preview not loaded">
          {!isEmpty(metaData) && (
            <div>
              <div className="site-img">{(metaData.image || metaData.thumbnail) && <img src={metaData.image ? metaData.image : metaData.thumbnail} alt="" />}</div>
              <div className="site-content">
                <p className="title">{metaData.title}</p>
                <p className="desc">{metaData.summery}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default WebUpload;
