const HomeVideo = () => (
  <>
    <div className="videoContainer">
      <video className="video" src={globalThis.getAssetUrl('videos/home.mp4')} autoPlay muted loop />
    </div>
    <style jsx>
      {`
        .videoContainer {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 480px;
          overflow: hidden;
          z-index: 0;
        }
        .video {
          display: block;
          width: 100%;
          margin-top: -100px;
        }
      `}
    </style>
  </>
);

export default HomeVideo;
