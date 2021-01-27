const RowOne = () => (
  <div className="row1">
    <div className="left center">
      <h3>DancotLL</h3>
    </div>
    <div className="mid center" />
    <div className="rigth center" />
    <style jsx>
      {`
        .row1 {
          width: 100%;
          height: 100%;
          display: flex;
        }
        .left,
        .mid,
        .rigth {
          flex: 1;
        }
        .left {
          background: yellow;
          border-radius: 0 4em 0 0;
        }
        .mid {
          background: pink;
          border-radius: 0 0 4em 0;
        }
        .rigth {
          background: black;
          border-radius: 4em 0 0 0;
        }
      `}
    </style>
  </div>
);

export default RowOne;
