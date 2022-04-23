import Welcome from './Welcome';

const HomeVideo = () => (
  <>
    <div className="videoContainer">
      <video className="video" src={globalThis.getAssetUrl('videos/home.mp4')} autoPlay muted loop />
      <Welcome />
    </div>
    <style jsx>
      {`
        .videoContainer {
          position: relative;
          width: 100%;
          height: 480px;
          overflow: hidden;
          z-index: 0;
        }
        .video {
          display: block;
          width: 100%;
          margin-top: -100px;
          opacity: 0.7;
        }
      `}
    </style>
  </>
);

export default HomeVideo;
