import React, { PureComponent } from "react";
import VideoPlayer from "../video-player";

export default class SelectedVideos extends PureComponent {
  removeFile = index => {
    const { videos, updateUploadVideo } = this.props;
    videos.splice(index, 1);
    updateUploadVideo(videos);
  };
  render() {
    const { videos } = this.props;
    return (
      <div className="step-one-images" contentEditable="false" data-text="Preview not loaded">
        {!!videos.length &&
          videos.map((video, index) => (
            <div key={index} className="img" alt="">
              <button className="delete-img" onClick={() => this.removeFile(index)}></button>
              <VideoPlayer url={video.preview} height={"80px"} width={"100px"} />
            </div>
          ))}
      </div>
    );
  }
}
