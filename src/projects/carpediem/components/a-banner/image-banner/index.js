import React from 'react';
import Image from 'next/image';

const ImageBanner = () => (
  <div className="image">
    <div className="bebidas" />
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="wave">
      <path
        fill="#ebebeb"
        fillOpacity="1"
        d="M0,192L120,197.3C240,203,480,213,720,213.3C960,213,1200,203,1320,197.3L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
      />
    </svg>

    <style jsx>
      {`
        .image {
          width: 100vw;
          height: 100%;
        }
        .bebidas {
          position: relative;
          width: 100vw;
        }
        .wave {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100vw;
        }
      `}
    </style>
  </div>
);

export default ImageBanner;
