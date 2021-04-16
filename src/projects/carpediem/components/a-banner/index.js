import Image from 'next/image';

import Arrow from '../k-flecha';

const Banner = () => (
  <div className="banner">
    <Image src="/images/logo-white.png" alt="logo-white" width={780} height={240} />
    <h2>Mira los mejores precios.</h2>

    <Arrow />
    <Image src="/images/banner.png" alt="banner of carpediem" width={1200} height={500} />

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="wave">
      <path
        fill="#ebebeb"
        fillOpacity="1"
        d="M0,192L120,197.3C240,203,480,213,720,213.3C960,213,1200,203,1320,197.3L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
      />
    </svg>

    <style jsx>
      {`
        .banner {
          width: 100vw;
          min-height: 100%;
          border-bottom: 3px solid blue;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-flow: column;
          position: relative;
          background-image: linear-gradient(120deg, #f6d365 0%, #ed8e2c 100%);
        }
        h2 {
          color: white;
          font-size: 2em;
        }
        .wave {
          position: absolute;
          bottom: 0;
          width: 100vw;
          overflow: hidden;
        }
      `}
    </style>
  </div>
);

export default Banner;
