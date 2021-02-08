const Buttons = () => (
  <div className="buttons">
    <button>
      <img src="/icon/google-play-brands.svg" alt="google icon" />
      Google
    </button>
    <button>
      <img src="/icon/apple-brands.svg" alt="apple icon" />
      Apple
    </button>
    <style jsx>
      {`
        .buttons {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding:0 0 2em 0;
        }
        button {
          width: 100px;
          display: flex;
          border: none;
          outline: none;
          border-radius: 0.5em;
          margin: 5px 10px;
          padding: 5px 8px;
          border: 2px solid #1c1c1c;
          background:white;
        }
        img {
          width: 25px;
          height: 25px;
          margin-right: 4px;
        }
        button:hover {
          cursor: pointer;
          box-shadow: 0.3em 0.3em 0.5em silver;
        }
      `}
    </style>
  </div>
);

export default Buttons;
