const Subscription = () => (
  <div className="subs">
    <h4>Suscríbete Gratis!</h4>
    <h2>
      Lorem <br /> ipsum <br /> dolor sit.
    </h2>
    <style jsx>
      {`
        .subs {
          width: 100vw;
          min-height: 30vh;
          margin: 2em 0;
          padding: 1em;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        h4 {
          color: white;
          padding: 1em 2em;
          border-radius: 1em;
          background-image: linear-gradient(to right, #6e3e76 0%, #da7c7a 100%);
          cursor: pointer;
        }
        h2 {
          background-image: linear-gradient(to right, #6e3e76 0%, #da7c7a 100%);
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
          margin: 1em;
          font-size: 2.5em;
          font-family: playfair display;
        }
      `}
    </style>
  </div>
);

export default Subscription;
