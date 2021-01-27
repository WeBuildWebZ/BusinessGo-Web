const RowTwo = () => (
  <div className="row2">
    <div className="left center" />
    <div className="rigth center" />
    <style jsx>
      {`
        .row2 {
          width: 100%;
          height: 100%;
          display: flex;
        }
        .left {
          flex: 2;
          background-image: url(/images/grupal1.jpg);
          background-size: cover;
          background-position: 0 0;
          background-repeat: no-repeat;
          border-radius: 4em 0;
        }
        .rigth {
          flex: 1;
          border-radius: 0 0 0 4em;
          background: yellow;
        }
      `}
    </style>
  </div>
);

export default RowTwo;
