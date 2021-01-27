const Left = () => (
  <div className="left">
    <span className="top">
      <h5>nada aqui</h5>
    </span>
    <span className="down">
      <h4>Somos una empresa genial, y nos dedicamos a hacer cosas geniales.</h4>
    </span>

    <style jsx>
      {`
        .left {
          width: 100%;
          height: 100%;
          display: flex;
          flex-flow: column;
        }
        .top,
        .down {
          flex: 1;
          width: 100%;
          height: 100%;
          padding: 2em;
        }
        .top {
          background: white;
        }
        .down {
          background: white;
        }
      `}
    </style>
  </div>
);

export default Left;
