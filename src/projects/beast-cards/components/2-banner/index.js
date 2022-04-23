import React from 'react';

const Banner = () => (
  <div className="banner_container">
    <h1>banner</h1>
    <h1>banner</h1>
    <h1>banner</h1>
    <style jsx>
      {`
        .banner_container {
          width: 100vw;
          height: 90vh;
          background: #000;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
        }
      `}
    </style>
  </div>
);

export default Banner;
