import React, { useEffect } from "react";
import { isMobile } from "react-device-detect";
import playIcon from "../../../../assets/images/play_icon.svg";
import pauseIcon from "../../../../assets/images/pause_icon.svg";
import playIconCircle from "../../../../assets/images/play-button.svg";
import pauseIconCircle from "../../../../assets/images/pause-button.svg";
import muteIcon from "../../../../assets/images/mute.svg";
import unMuteIcon from "../../../../assets/images/speaker.svg";
import forwardIcon from "../../../../assets/images/video-right.svg";
import backwardIcon from "../../../../assets/images/video-left.svg";
// import forwardIcon from "../../../../assets/images/forward.svg";
// import backwardIcon from "../../../../assets/images/backward.svg";

let videoProgressWrapper;
const VideoControls = ({
  muted,
  volume,
  played,
  isLoaded,
  progress,
  muteVideo,
  playVideo,
  unMuteVideo,
  togglePlayPause,
  handleSeekingBar,
  handleSeekChange,
  handleSeekMouseUp,
  handleVolumeChange,
  handleSeekMouseDown,
  handleVolumeSeekDown,
  handleVolumeSeekMouseUp,
  handleVideoForwardBackward,
}) => {
  const { playedSeconds, duration } = progress;
  /*  const [volumeRange, setVolume] = useState(
    //  sessionStorage && sessionStorage.getItem("volumeLevel")
    //     ? parseFloat(sessionStorage.getItem("volumeLevel"))
    //     : 0.2
    volume ? volume : 0.2
  ); */

  useEffect(() => {
    const progressBar = document.querySelector(".bar");
    // add click event listener on progress-bar, so that video can be rewind and backward
    // progressBar.addEventListener("click", handleSeekingBar);
    progressBar.addEventListener("click", handleSeekingBar);
  });

  /* const handleVolumeChange = (event) => {
    console.log("handleVolumeChange", event.target.value);
    setVolume(event.target.value);
  }; */

  // total duration and elapsed video timings calculation
  var durationMinutes = duration >= 60 ? Math.floor(duration / 60) : 0;
  var remaningDurationSeconds = Math.floor(duration - durationMinutes * 60);

  var finalVideoDuration = `${durationMinutes ? durationMinutes : "00"}:${
    remaningDurationSeconds ? remaningDurationSeconds : "00"
  }`;

  var playedMinute = Math.floor(playedSeconds / 60);
  var remaningPlayedTimeInSeconds = Math.floor(
    playedSeconds - playedMinute * 60
  );

  var finalVideoPlayedTime = `${playedMinute ? playedMinute : "00"}:${
    remaningPlayedTimeInSeconds ? remaningPlayedTimeInSeconds : "00"
  }`;

  /* const videoProgressWrapper = document.querySelector(
    ".video-progress-wrapper"
  ); */

  let videoProgressInPixel;

  if (videoProgressWrapper) {
    const videoProgressWrapperWidth = videoProgressWrapper.getClientRects()[0]
      .width;

    videoProgressInPixel = (videoProgressWrapperWidth * (played * 100)) / 100;
  }

  return (
    <>
      <div className="video-controls">
        {isLoaded && isMobile && (
          <>
            <button
              className="play-pause-mobile-btn top-control-btn"
              onClick={togglePlayPause}
            >
              <img
                src={playVideo ? pauseIconCircle : playIconCircle}
                alt="Play Icon"
              />
            </button>
          </>
        )}
        <div className="volume-bar-wrapper">
          {!isMobile ? (
            <button
              onClick={togglePlayPause}
              className="play-pause-btn"
              name="forward"
            >
              <img src={playVideo ? pauseIcon : playIcon} alt="Play Icon" />
            </button>
          ) : (
            <div></div>
          )}
          <div
            className={`volume-bar-wrapper__range ${isMobile && "show-range"}`}
          >
            <input
              className={`video-volume-bar`}
              type="range"
              id="volume-bar"
              title="volume"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              onPointerDown={handleVolumeSeekDown}
              onTouchEnd={handleVolumeSeekMouseUp}
            ></input>
            <img
              src={muted ? muteIcon : unMuteIcon}
              alt="mute/unmute"
              className="mute-unmute-icon"
              onClick={() => (muted ? unMuteVideo() : muteVideo())}
            />
          </div>
        </div>

        <div
          className="video-progress-wrapper"
          ref={(elem) => (videoProgressWrapper = elem)}
        >
          <div
            className="bar"
            style={{
              width: `${videoProgressInPixel}px`,
            }}
          ></div>
          {/* <div className="bar"></div>
          <div className="thumb"></div> */}
          <input
            type="range"
            min={0}
            max={1}
            step="any"
            value={played}
            onMouseDown={handleSeekMouseDown}
            onPointerDown={handleSeekMouseDown}
            onChange={handleSeekChange}
            onMouseUp={handleSeekMouseUp}
            onTouchEnd={handleSeekMouseUp}
          />
        </div>
        <div className="video-timings">
          <span>{finalVideoPlayedTime}</span> /{" "}
          <span>{finalVideoDuration}</span>
        </div>
      </div>
      {isMobile && (
        <>
          <div
            className="backward-icon-wrapper"
            onTouchStart={handleVideoForwardBackward}
            name="backward"
          >
            <button
              className="backward-icon top-control-btn"
              name="backward"
              onTouchStart={handleVideoForwardBackward}
            >
              <img src={backwardIcon} alt="backward 10s" name="backward" />
            </button>
          </div>
          <div
            className="forward-icon-wrapper"
            onTouchStart={handleVideoForwardBackward}
            name="forward"
          >
            <button
              className="forward-icon top-control-btn"
              name="forward"
              onTouchStart={handleVideoForwardBackward}
            >
              <img src={forwardIcon} alt="forward 10s" name="forward" />
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default VideoControls;
