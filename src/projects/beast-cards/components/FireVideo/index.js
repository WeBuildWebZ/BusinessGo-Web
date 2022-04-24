import Title from '../title';

const FireVideo = () => (
  <>
    <Title title="Seccion" />
    <div className="videoContainer">
      <video className="video" src={globalThis.getAssetUrl('videos/fire.mp4')} autoPlay muted loop />
    </div>
    <style jsx>
      {`
        .videoContainer {
          position: relative;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
        }
        .video {
          display: block;
          width: 100%;
        }

        @media only screen and (max-width: 768px) {
          .video {
            width: 200%;
            margin-top: 0;
            margin-left: -50%;
          }
        }
      `}
    </style>
  </>
);

export default FireVideo;
