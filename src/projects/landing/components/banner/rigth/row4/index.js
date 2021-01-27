const RowFour = () => (
  <div className="row4">
    <div className="left center">left</div>
    <div className="mid center">
      <h4>
        Diseño <br /> Web
      </h4>
    </div>
    <div className="rigth center" />
    <style jsx>
      {`
        .row4 {
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
          background-image: url(/images/man.jpg);
          background-size: cover;
          background-position: 0 0;
          background-repeat: no-repeat;
        }
        .mid {
          background: yellow;
        }
        .rigth {
          background: pink;
          border-radius: 0 4em;
        }
      `}
    </style>
  </div>
);

export default RowFour;
