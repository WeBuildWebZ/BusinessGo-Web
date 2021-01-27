const Left = () => (
  <div className="left">
    <span className="top" />
    <span className="down">
      <h4>Somos una empresa genial, y nos dedicamos a hacer cosas geniales.</h4>
      <span>
        <button>ver</button>
        <h6>Somos una empresa genial, y nos dedicamos a hacer cosas geniales.</h6>
      </span>
    </span>

    <style jsx>
      {`
        .left {
          flex: 1;
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
        }
        .top {
          background-image: linear-gradient(to top, hsla(0, 0%, 100%, 1), hsla(0, 0%, 100%, 0.1)),
            url(/images/left-top.jpg);
          background-size: cover;
          background-position: 0 0;
          background-repeat: no-repeat;
          border-radius: 1em;
        }
        // ================================
        .down {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-flow: column;
        }
        h4 {
          border: 1px solid #ebebeb;
          font-size: 3em;
          line-height: 50px;
          overflow-y: hidden;
        }
        .down span {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        button {
          padding: 0.3em 3.5em;
          margin-right: 1em;
          outline: none;
          border: none;
          background: #1c1c1c;
          color: white;
          border-radius: 0.3em;
        }
        h6 {
          padding-top: 7px;
        }
      `}
    </style>
  </div>
);

export default Left;
