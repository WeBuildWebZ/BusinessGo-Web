import { useRef, useState } from 'react';
import PropTypes from 'prop-types';

const Video = props => {
  const videoRef = useRef();
  const [paused, setPaused] = useState(true);

  const togglePlay = () => {
    setPaused(!videoRef.current.paused);
    if (videoRef.current.paused) videoRef.current.play();
    else videoRef.current.pause();
  };

  const handlePlay = () => {
    setPaused(false);
  };

  const handlePause = () => {
    setPaused(true);
  };

  return (
    <div className="videoContainer">
      <video
        className="video"
        controls="controls"
        preload="metadata"
        ref={videoRef}
        onPlay={handlePlay}
        onPause={handlePause}
      >
        <source src={props.url} type="video/mp4" />
      </video>
      <img
        className={`playButton${paused ? ' paused' : ' playing'}`}
        src="/images/playButton.png"
        onClick={togglePlay}
      />
      <style jsx>
        {`
          .videoContainer {
            position: relative;
          }
          .playButton {
            position: absolute;
            transform: translate(-50%, -50%);
            left: 50%;
            top: 50%;
            width: 50px;
            border-radius: 100px;
            box-shadow: 0 0 2px 2px red;
            cursor: pointer;
            user-select: none;
            transition: 0.7s;
          }
          .playButton:hover {
            transform: translate(-50%, -50%) scale(1.1);
          }
          .playButton:active {
            transform: translate(-50%, -50%) scale(1.2);
            transition: 0.1s;
          }
          .playButton.playing {
            display: none;
          }
          .video {
            width: 90%;
            margin-top: 14px;
            margin-left: 5%;
            border-radius: 14px;
            outline: none;
          }
          @media only screen and (min-width: 550px) {
            .video {
              height: 500px;
            }
          }
        `}
      </style>
    </div>
  );
};

Video.propTypes = {
  url: PropTypes.string.isRequired
};

export default Video;
