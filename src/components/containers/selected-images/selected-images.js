import React, { PureComponent } from "react";

export default class SelectedImages extends PureComponent {
  removeFile = index => {
    const { images, updateUploadImage } = this.props;
    images.splice(index, 1);
    updateUploadImage(images);
  };
  render() {
    const { images } = this.props;
    return (
      <div className="step-one-images" contentEditable="false" data-text="Preview not loaded">
        {!!images.length &&
          images.map((image, index) => (
            <div key={index} className="img" alt="">
              <button
                className="delete-img"
                onClick={() => this.removeFile(index)}
              ></button>
              <img src={image.preview} alt="" />
            </div>
          ))}
      </div>
    );
  }
}
