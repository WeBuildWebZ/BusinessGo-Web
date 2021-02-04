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
          padding: 0 1em;
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
          background-image: linear-gradient(to left, #ff8aac, #e396dc, #aca9fa, #63baff, #12c5eb);
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

        @media (max-width: 587px) {
          .text {
            width: 100%;
            flex-flow: column;
            align-items: flex-start;
            border-radius: 0.5em;
            padding: 0.5em;
          }
          button {
            margin-bottom: 5px;
          }
          hr {
            margin: 4px 0;
            width: 2em;
          }
        }
      `}
    </style>
  </div>
);

export default Additional;
