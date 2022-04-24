import React from 'react';

const Title = title => (
  <div className="text">
    {title.title}
    <style jsx>
      {`
        .text {
          width: 100vw;
          font-size: 50px;
          color: white;
          font-weight: bold;
          margin: 0;
          padding: 0;
          padding-left: 2em;
        }
      `}
    </style>
  </div>
);

export default Title;
