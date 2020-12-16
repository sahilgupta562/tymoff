import React, { PureComponent } from "react";
import ReactPlayer from "react-player";

class VideoPlayer extends PureComponent {
  render() {
    const { url, ...rest } = this.props;
    return <ReactPlayer url={url} {...rest} ref={this.props.handleref} />;
  }
}

export default VideoPlayer;
