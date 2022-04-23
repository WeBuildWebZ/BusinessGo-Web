import BottomGradient from './BottomGradient';
import Welcome from './Welcome';

const HomeVideo = () => (
  <>
    <div className="videoContainer">
      <video className="video" src={globalThis.getAssetUrl('videos/home.mp4')} autoPlay muted loop />
      <div className="absoluteContainer">
        <BottomGradient />
        <Welcome />
      </div>
    </div>
    <style jsx>
      {`
        .videoContainer {
          position: relative;
          width: 100%;
          height: 480px;
          overflow: hidden;
        }
        .video {
          display: block;
          width: 100%;
          margin-top: -100px;
          opacity: 0.7;
        }
        .absoluteContainer {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
        }
      `}
    </style>
  </>
);

export default HomeVideo;
