const Title = () => (
  <div className="title">
    <div className="text">Read My F****** Comic!</div>
    <style jsx>
      {`
        .title {
          position: relative;
          width: 100%;
          height: 80px;
          vertical-align: middle;
          text-align: center;
          background-color: #f2bea2;
        }
        .text {
          position: absolute;
          transform: translate(-50%, -50%);
          left: 50%;
          top: 50%;
          vertical-align: middle;
          font-size: 48px;
          color: #38a4f1;
          text-shadow: 0 0 3px black;
        }
      `}
    </style>
  </div>
);

export default Title;
