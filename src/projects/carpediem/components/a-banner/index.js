import Arrow from '../k-flecha';

import Top from './top';
import Bottom from './bottom';

const Banner = () => (
  <div className="banner">
    <Top />
    <Bottom />
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="wave">
      <path
        fill="#ebebeb"
        fillOpacity="1"
        d="M0,192L120,197.3C240,203,480,213,720,213.3C960,213,1200,203,1320,197.3L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
      />
    </svg>

    <Arrow />

    <style jsx>
      {`
        .banner {
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-flow: column;
          position: relative;
          background-image: linear-gradient(120deg, #f6d365 0%, #ed8e2c 100%);
          overflow: hidden;
        }
        .wave {
          position: absolute;
          bottom: -3em;
          width: 100vw;
          overflow: hidden;
        }
      `}
    </style>
  </div>
);

export default Banner;
