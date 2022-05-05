import Menu from '../1-menu';

import BottomGradient from './BottomGradient';
import Welcome from './Welcome';

const HomeVideo = () => (
  <>
    <video className="video" src={globalThis.getAssetUrl('videos/home.mp4')} autoPlay muted loop id="home" />
    <Menu />
    <Welcome />
    <style jsx>
      {`
        vide,
        .video {
          min-width: 100vw;
          height: 100vh;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
          position: relative;
          object-fit: cover;
        }
      `}
    </style>
  </>
);
export default HomeVideo;
