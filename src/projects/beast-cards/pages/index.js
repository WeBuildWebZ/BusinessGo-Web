import EmptyComponent from '../components/EmptyComponent';

const HomePage = () => (
  <div>
    <div className="videoContainer">
      <video className="video" src={globalThis.getAssetUrl('videos/home.mp4')} autoPlay muted loop />
    </div>
    <style jsx>
      {`
        .videoContainer {
          height: 480px;
          overflow: hidden;
        }
        .video {
          width: 100%;
          margin-top: -100px;
        }
      `}
    </style>
  </div>
);

export default HomePage;
