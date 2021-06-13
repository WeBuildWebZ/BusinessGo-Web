const PageTitle = () => (
  <div className="pageTitle">
    <span>¡DALE UNA</span>
    <span className="bolder"> MINIWEB</span>
    <br />
    <span className="bolder">A TU</span>
    <span> NEGOCIO!</span>
    <style jsx>
      {`
        .pageTitle {
          color: white;
          font-size: 34px;
          font-weight: 900;
          text-align: center;
        }
        .bolder {
          color: #fa0070;
        }
      `}
    </style>
  </div>
);

export default PageTitle;
