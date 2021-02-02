const Additional = () => (
  <div className="additional">
    <div className="text">
      <button>Deluxe</button>
      <h5>WeBuildWebz</h5>
      <hr />
      <p>Construimos Interfacez de diseño atractivas.</p>
    </div>
    <style jsx>
      {`
        .additional {
          width: 100vw;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .text {
          width: 600px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          border: 1px solid silver;
          border-radius: 0.5em;
          padding: 0.5em 0;
        }
        button {
          outline: none;
          border: none;
          background: linear-gradient(to left, #ff4646, #ff577f);
          border-radius: 0.5em;
          padding: 3px 5px;
          color: white;
          font-weight: bold;
        }
        hr {
          background: #1c1c1c;
          width: 1em;
          height: 1px;
        }
        h5,
        p {
          height: 100%;
          margin: 0;
          padding: 0;
        }
      `}
    </style>
  </div>
);

export default Additional;
