import React, { PureComponent } from "react";
import Dropzone from "react-dropzone";
import { UploadTab } from "../../../constant";
import uploadImage from "../../../assets/images/output-onlinepngtools.png";
import "./file-selector.scss";

class FileSelector extends PureComponent {
  addValidFile = file => {
    const { activeTab, setUploadImage, setUploadVideo } = this.props;
    const reader = new FileReader();
    reader.onload = () => {
      const preview = reader.result;
      activeTab === UploadTab.IMAGE ? setUploadImage({ file, preview }) : setUploadVideo({ file, preview });
    };
    reader.readAsDataURL(file);
  };

  handleOnDrop = acceptedFiles => {
    acceptedFiles.forEach(file => {
      if (!this.isFileExist(file)) this.addValidFile(file);
    });
  };
  isFileExist = file => {
    const { images, videos, activeTab } = this.props;
    var i, len;
    var status = false;
    const files = activeTab === UploadTab.IMAGE ? images : videos;
    for (i = 0, len = files.length; i < len; i++) {
      if (files[i].file.name === file.name && files[i].file.size === file.size && files[i].file.lastModified === file.lastModified) {
        status = true;
      }
    }
    return status;
  };
  render() {
    const { title, activeTab } = this.props;
    const format = activeTab === UploadTab.IMAGE ? "image/*" : "video/mp4,video/x-m4v,video/*";
    return (
      <Dropzone onDrop={this.handleOnDrop} accept={format} multiple={true}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div className="drag-and-drop upload-sec" {...getRootProps()}>
              <input {...getInputProps()} />
              <div>
                <img src={uploadImage} alt="" />
                <p className="upload-btn">Choose File...</p>
                <span>{title}</span>
              </div>
            </div>
          </section>
        )}
      </Dropzone>
    );
  }
}

export default FileSelector;
