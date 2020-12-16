import React, { PureComponent } from "react";
import { isIOS, isMobile } from "react-device-detect";
import { CircularProgress, ButtonBase } from "@material-ui/core";
import { VideoPlayer } from "../../../containers";
import VideoControls from "./videoControls";
import { Replay } from "../../../../icons";
import "./video.scss";

var clickTimer = null;
export default class Video extends PureComponent {
  state = {
    isLoaded: false,
    volume: this.props.volumeLevel ? this.props.volumeLevel : 0.2,
    //volume: 0.2,
    playing: true,
    seeking: false,
    seekVolume: false, // volume seeking
    played: 0,
    progress: {
      played: 0,
      loaded: 0,
      duration: 0,
      playedSeconds: 0,
      loadedSeconds: 0,
    },
    isEnded: false,
  };
  intervalId = null;
  timeOutId = null;

  componentDidMount() {
    // const volumeBar = document.getElementById("volume-bar"); // get the volume bar from the DOM
    // const videoPlayer = document.getElementById("video-player"); // get the video player
    const imageWrapper = document.querySelector(".image-wrapper"); // get the video player
    const videoControlsElement = document.querySelector(".video-controls");
    const self = this;
    // const { changeVolumeLevel } = this.props;

    const { stopScrollTimer } = this.props;
    stopScrollTimer();

    if (isMobile) {
      if (imageWrapper) imageWrapper.addEventListener("click", this.toggleVideoControl);
      // imageWrapper.onpointerdown = this.toggleVideoControl;

      // check if seeking is not happening and controls are visible then hide them
      this.intervalId = setInterval(() => {
        const styleObject = getComputedStyle(videoControlsElement);
        console.log("in Setinterval intervalId", self.intervalId);
        // console.log("style Object", styleObject);
        console.log("@@@style Object visibility", styleObject.visibility);

        if (!this.state.seeking && !this.state.seekVolume && styleObject.visibility === "visible") {
          self.timeOutId = setTimeout(() => {
            videoControlsElement.style.visibility = "hidden";
          }, 2000);
        } else {
          if (self.timeOutId) clearTimeout(self.timeOutId);
        }
      }, 3000);
    }
    // attach listener to the volume bar
    /*   volumeBar.addEventListener("change", (evt) => {
      console.log("change volumar listener");
      if (parseFloat(evt.target.value)) {
        console.log("In volume bar change event listener", evt.target.value);
        this.props.unMuteVideo();
        videoPlayer.muted = false;
        this.setState(
          {
            volume: parseFloat(evt.target.value),
          },
          () => {
            changeVolumeLevel(this.state.volume);
          }
        );
      } else {
        console.log("In mute video", evt.target.value);
        this.props.muteVideo();
        videoPlayer.muted = true;
        this.setState(
          {
            volume: parseFloat(evt.target.value),
          },
          () => {
            changeVolumeLevel(this.state.volume);
          }
        );
      }
    }); */

    document.addEventListener("keypress", this.handleKeyPress);
  }

  handleVolumeChange = (e) => {
    const { value } = e.target;
    const { changeVolumeLevel } = this.props;

    if (parseFloat(value)) {
      console.log("In volume bar change event listener", value);
      this.props.unMuteVideo();
      //  videoPlayer.muted = false;
      this.setState(
        {
          volume: parseFloat(value),
        },
        () => {
          changeVolumeLevel(this.state.volume);
        }
      );
    } else {
      console.log("In mute video", value);
      this.props.muteVideo();
      //  videoPlayer.muted = true;
      this.setState(
        {
          volume: parseFloat(value),
        },
        () => {
          changeVolumeLevel(this.state.volume);
        }
      );
    }
  };

  componentWillUnmount() {
    if (this.intervalId) clearInterval(this.intervalId);
    document.getElementById("volume-bar").removeEventListener("volumechange", this.onVolumeChange);

    document.removeEventListener("keypress", this.handleKeyPress);
  }

  toggleVideoControl = (e) => {
    console.log("@e.target", e.currentTarget);
    console.log("@e.pointerType", e.pointerType);
    const videoControlsElement = document.querySelector(".video-controls");
    if (videoControlsElement) {
      console.log("videoControlsElement.style.visibility", videoControlsElement.style.visibility);
      videoControlsElement.style.visibility = videoControlsElement.style.visibility === "visible" ? "hidden" : "visible";
    }
  };

  handleKeyPress = (e) => {
    const videoPlayer = document.getElementById("video-player"); // get the video player
    if (e.which === 32) {
      if (videoPlayer.paused) this.setState({ playing: true });
      else this.setState({ playing: false });
    }
  };

  onEndedVideo = () => {
    if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1 && document.fullscreen) {
      document.exitFullscreen();
    } else if (!(navigator.userAgent.toLowerCase().indexOf("firefox") > -1)) {
      !isIOS && document.webkitExitFullscreen();
    }
    const { startScrollTimer, commentBox, contentAlreadyVisited, showMoreDetailModal } = this.props;
    this.setState({ isEnded: true, playing: false });
    !commentBox && !contentAlreadyVisited && !showMoreDetailModal && startScrollTimer();
  };

  onStartVideo = () => {
    this.setState({ isLoaded: true });
    const { stopScrollTimer } = this.props;
    stopScrollTimer();
  };

  onPlayVideo = () => {
    const { stopScrollTimer } = this.props;
    stopScrollTimer();
    this.setState({ isEnded: false, playing: true });
  };

  onVolumeChange = (event) => {
    const { muteVideo, unMuteVideo } = this.props;
    const target = event.target;
    target.muted ? muteVideo() : unMuteVideo();
  };

  handleVloume = () => {};

  onProgress = (progress) => {
    if (!this.state.seeking) {
      // this.setState(state);
      const { playedSeconds, played, loaded, loadedSeconds } = progress;
      const videoPlayer = document.getElementById("video-player");

      this.setState({
        progress: {
          played,
          loaded,
          playedSeconds,
          loadedSeconds,
          duration: videoPlayer.duration,
        },
        played,
      });
    }
  };

  togglePlayPause = () => {
    /*     const videoPlayer = document.getElementById("video-player");
    if (videoPlayer)
      videoPlayer.paused ? videoPlayer.play() : videoPlayer.pause(); */

    this.setState({
      playing: !this.state.playing,
    });
  };

  /**
   * handle video fast forward and backward by double tapping on mobile screen(left/right)
   */
  handleVideoForwardBackward = (e) => {
    const { target } = e;
    const name = target.getAttribute("name");
    const videoPlayer = document.getElementById("video-player");

    // get both the icons, forward/backend
    const backwardButton = document.querySelector(".backward-icon");
    const forwardButton = document.querySelector(".forward-icon");

    if (clickTimer == null) {
      clickTimer = setTimeout(function () {
        clickTimer = null;
      }, 2000);
    } else {
      clearTimeout(clickTimer);
      clickTimer = null;
      // hide icons
      if (name === "backward") {
        if (backwardButton) backwardButton.style.visibility = "visible";
        videoPlayer.currentTime = videoPlayer.currentTime - 5;

        // hide that particular icon after some time
        setTimeout(() => {
          if (backwardButton) backwardButton.style.visibility = "hidden";
          // if (videoControls) videoControls.style.display = "none";
        }, 300);
      } else {
        if (forwardButton) forwardButton.style.visibility = "visible";
        videoPlayer.currentTime = videoPlayer.currentTime + 5;

        // hide that particular icon after some time
        setTimeout(() => {
          if (forwardButton) forwardButton.style.visibility = "hidden";
          // if (videoControls) videoControls.style.display = "none";
        }, 300);
      }
    }
  };

  /**
   * handle video forward and backward using progress bar
   */
  handleSeekingBar = (e, jQueryElem) => {
    const self = this;

    this.setState(
      {
        seeking: true,
        playing: false,
      },
      () => {
        const videoPlayer = document.getElementById("video-player");
        if (e) {
          const { target } = e;
          const { name } = target;

          if (name && name === "forward") {
            videoPlayer.currentTime = videoPlayer.currentTime + 5;
          } else if (name && name === "backward") {
            videoPlayer.currentTime = videoPlayer.currentTime - 5;
          } else {
            // const percent = e.offsetX / target.offsetWidth;
            const percent = e.offsetX / 470.8;

            self.videoPlayerRef.seekTo(percent);

            setTimeout(() => {
              self.setState({
                seeking: false,
                playing: true,
              });
            }, 100);
          }
        }
      }
    );
  };

  ref = (player) => {
    this.videoPlayerRef = player;
  };

  handleMouseMove(e) {
    const draggablePoint = document.querySelector("#draggable-point");
    const audioProgressBar = document.querySelector("#audio-progress-bar");
    const videoPlayer = document.getElementById("video-player");

    const parentElementDimension = document.querySelector("#audio-progress").getBoundingClientRect();
    const { left, width } = parentElementDimension;
    // console.log("Parent left", left);

    if (e.clientX - left >= 0 && e.clientX - left <= width) {
      draggablePoint.style.left = e.clientX - left + "px";
      const widthOfProgressBar = (e.clientX - left) / width;

      audioProgressBar.style.width = widthOfProgressBar * 100;
      videoPlayer.currentTime = widthOfProgressBar * 100;

      // this.videoPlayerRef.seekTo(widthOfProgressBar * 100);
    }
  }

  handleSeekMouseDown = (e) => {
    this.setState({ seeking: true });
  };

  handleSeekChange = (e) => {
    this.setState({ played: parseFloat(e.target.value) });
  };

  handleSeekMouseUp = (e) => {
    this.setState({ seeking: false });
    this.videoPlayerRef.seekTo(parseFloat(e.target.value));
  };

  handleVolumeSeekDown = () => {
    this.setState({ seekVolume: true });
  };
  handleVolumeSeekMouseUp = () => {
    this.setState({ seekVolume: false });
  };

  render() {
    // const videoPlayer = document.getElementById("video-player");
    const { activeContent, videoMuted, browserTab } = this.props;
    const { isLoaded, playing, volume, isEnded } = this.state;
    const hasContentValue = !!activeContent.contentValue;

    return (
      <div className={`video-react ${hasContentValue ? "video-ptop" : ""}`}>
        <VideoPlayer
          handleref={this.ref}
          className="video-react-video"
          url={activeContent.contentUrl[0].url}
          width={"100%"}
          onStart={this.onStartVideo}
          onEnded={this.onEndedVideo}
          onPlay={this.onPlayVideo}
          onProgress={this.onProgress}
          muted={videoMuted}
          volume={volume}
          playing={!!(browserTab && playing)}
          // controls={isLoaded}
          progressInterval={1000}
          config={{
            file: {
              attributes: {
                controlsList: "nodownload",
                disablePictureInPicture: "disablePictureInPicture",
                id: "video-player",
                onClick: () => {
                  this.togglePlayPause();
                },
              },
            },
          }}
        />
        <VideoControls
          isLoaded={isLoaded}
          muted={videoMuted}
          progress={this.state.progress}
          played={this.state.played}
          togglePlayPause={this.togglePlayPause}
          playVideo={!!(browserTab && playing)}
          handleSeekingBar={this.handleSeekingBar}
          handleVideoForwardBackward={this.handleVideoForwardBackward}
          handleSeekMouseDown={this.handleSeekMouseDown}
          handleSeekChange={this.handleSeekChange}
          handleSeekMouseUp={this.handleSeekMouseUp}
          handleVolumeChange={this.handleVolumeChange}
          handleVolumeSeekDown={this.handleVolumeSeekDown}
          handleVolumeSeekMouseUp={this.handleVolumeSeekMouseUp}
          muteVideo={this.props.muteVideo}
          unMuteVideo={this.props.unMuteVideo}
          videoPlayerRef={this.videoPlayerRef}
          volume={volume}
        />
        {/* {contentList.length > 1 && <ContentArrow />} */}
        {!isLoaded && <CircularProgress />}
        {isEnded && (
          <div className="video-replay">
            <ButtonBase onClick={this.onPlayVideo}>
              <Replay width={"35px"} height={"35px"} className="replay" />
            </ButtonBase>
          </div>
        )}
      </div>
    );
  }
}
