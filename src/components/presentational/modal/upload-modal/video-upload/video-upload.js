import React, { PureComponent } from "react";
import { FileSelector, SelectedVideos } from "../../../../containers";
class VideoUpload extends PureComponent {
  handleDescriptionChange = description => {
    const { setUploadVideoDescription } = this.props;
    setUploadVideoDescription(description);
  };
  render() {
    const { description, error } = this.props;
    return (
      <div className="description">
        <FileSelector title="Drag and drop Video" />
        <span className="error">{error}</span>
        <SelectedVideos />
        <div className="description-content">
          <textarea name="comment" id="comment" maxLength={300} placeholder="Description" value={description} onChange={event => this.handleDescriptionChange(event.target.value)}></textarea>
        </div>
      </div>
    );
  }
}

export default VideoUpload;
