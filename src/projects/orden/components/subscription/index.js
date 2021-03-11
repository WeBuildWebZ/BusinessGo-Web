const Subscription = () => (
  <div className="subs">
    <div className="left">
      <button>Suscríbete Gratis!</button>
    </div>
    <div className="right">
      <h2>Queremos</h2>
      <h2>Brindarte</h2>
      <h2>Comfort</h2>
    </div>

    <style jsx>
      {`
        .subs {
          width: 100vw;
          min-height: 30vh;
          margin: 2em 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .left,
        .right {
          width: 500px;
          padding: 0 1em;
        }

        button {
          width: 400px;
          color: white;
          padding: 1em 2em;
          border-radius: 1em;
          background-image: linear-gradient(to right, #6e3e76 0%, #da7c7a 100%);
          cursor: pointer;
          border: none;
          outline: none;
          font-size: 2em;
        }
        h2 {
          background-image: linear-gradient(to right, #6e3e76 0%, #da7c7a 100%);
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
          font-size: 2.5em;
          font-family: playfair display;
        }
        h2:nth-child(2) {
          padding-left: 1em;
        }
        h2:nth-child(3) {
          padding-left: 2em;
        }
        @media (max-width: 970px) {
          .subs {
            margin: 2em 0;
          }
          .left,
          .right {
            width: 100vw;
          }
        }
        @media (max-width: 710px) {
          .subs {
            flex-wrap: wrap;
          }
          .left,
          .right {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column;
          }
        }
        @media (max-width: 434px) {
          button {
            width: auto;
          }
        }
        @media (max-width: 294px) {
          button {
            border-radius: 0;
          }
        }
      `}
    </style>
  </div>
);

export default Subscription;
