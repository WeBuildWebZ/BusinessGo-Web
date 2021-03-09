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
          display: flex;
          justify-content: flex-end;
          padding: 1em 3em 1em 1em;
        }
        img {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          border: 3px solid white;
          object-fit: cover;
        }
      `}
    </style>
  </div>
);

export default Left;
