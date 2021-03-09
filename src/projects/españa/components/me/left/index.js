import React from 'react';

const Left = () => (
  <div className="left">
    <img src="/images/she.jpg" alt="" />
    <style jsx>
      {`
        .left {
          width: 100%;
          min-height: 350px;
          flex: 1;
          position: relative;
        }
        img {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          border: 3px solid white;
          object-fit: cover;
          position: absolute;
          top: -4em;
          right: 2em;
        }
      `}
    </style>
  </div>
);

export default Left;
