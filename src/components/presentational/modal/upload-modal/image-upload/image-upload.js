import React, { PureComponent } from "react";
import { FileSelector, SelectedImages } from "../../../../containers";
class ImageUpload extends PureComponent {
  handleDescriptionChange = description => {
    const { setUploadImageDescription } = this.props;
    setUploadImageDescription(description);
  };
  render() {
    const { description, error } = this.props;
    return (
      <div className="description">
        {/* <FileSelector title="Drag and drop images (Maximum 20)" /> */}
        <FileSelector title="Drag and drop images" />
        <span className="error">{error}</span>
        <SelectedImages />
        <div className="description-content">
          <textarea name="comment" maxLength={300} placeholder="Description" value={description} onChange={event => this.handleDescriptionChange(event.target.value)}></textarea>
        </div>
      </div>
    );
  }
}

export default ImageUpload;
