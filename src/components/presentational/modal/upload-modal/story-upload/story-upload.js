import React, { PureComponent } from "react";
import { StoryEditor } from "../../../../containers";
class StoryUpload extends PureComponent {
  handleTitleChange = title => {
    const { setUploadStoryTitle } = this.props;
    setUploadStoryTitle(title);
  };
  render() {
    const { title, error } = this.props;
    return (
      <div className="description">
        <label className="upload-label">Title</label>
        <textarea
          type="text"
          placeholder="Enter title"
          className="upload-textarea"
          value={title}
          onChange={event => this.handleTitleChange(event.target.value)}
        ></textarea>
        <label className="upload-label"> Description</label>
        <StoryEditor />
        <span className="error">{error}</span>
      </div>
    );
  }
}

export default StoryUpload;
