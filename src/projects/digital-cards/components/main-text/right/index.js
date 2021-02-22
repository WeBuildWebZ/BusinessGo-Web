const Right = () => (
  <div className="right">
    <style jsx>
      {`
        .right {
          width: 450px;
          height: 500px;
          background-image: url(/images/phone.jpg);
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          margin-left: 3em;
          border-radius: 1em;
          position: relative;
        }
        .right:before {
          width: 100%;
          height: 100%;
          border-radius: 1em;
          content: '';
          position: absolute;
          left: -2em;
          top: -2em;
          background: #d16ba5;
          z-index: -10;
        }
        .right:after {
          width: 100%;
          height: 80%;
          border-radius: 1em;
          content: '';
          position: absolute;
          left: -4em;
          top: 0;
          background: #5ffbf1;
          z-index: -20;
        }
      `}
    </style>
    s
  </div>
);

export default Right;
