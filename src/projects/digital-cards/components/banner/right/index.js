const Right = () => (
  <div className="right">
    <div className="image" />
    <style jsx>
      {`
        .right {
          width: 100%;
          height: 100%;
          flex: 1;
          display: flex;
          align-items: center;
        }
        .image {
          width: 450px;
          height: 600px;
          background-image: url(/images/banner.jpg);
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
        }
      `}
    </style>
  </div>
);

export default Right;
