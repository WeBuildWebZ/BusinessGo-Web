const RowThree = () => (
  <div className="row3">
    <div className="left center">
      <h4>SEO</h4>
    </div>
    <div className="mid center">
      <h4>Dominio.com</h4>
    </div>
    <div className="rigth center" />
    <style jsx>
      {`
        .row3 {
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
          background: black;
          border-radius: 4em 0 0 0;
        }
        h4 {
          color: white;
        }
        .mid {
          background: pink;
          border-radius: 50%;
        }
        .rigth {
          background-image: url(/images/brindis.jpg);
          background-size: cover;
          background-position: 0 -70px;
          background-repeat: no-repeat;
          border-radius: 4em 0 0 0;
        }
      `}
    </style>
  </div>
);

export default RowThree;
