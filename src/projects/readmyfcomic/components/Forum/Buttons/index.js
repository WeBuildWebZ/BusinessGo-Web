const Buttons = () => (
  <div className="buttons">
    <div className="button">
      <img className="icon" src="/icons/heart.png" />
    </div>
    <style jsx>
      {`
        .buttons {
          margin: 14px;
        }
        .button {
          width: fit-content;
          padding: 4px 21px 4px 21px;
          border-radius: 14px;
          background-color: #ffcfb5;
          cursor: pointer;
          transition: 0.7s;
          user-select: none;
        }
        .button:hover {
          transform: scale(1.1);
        }
        .button:active {
          transform: scale(1.2);
          transition: 0.1s;
          box-shadow: 0 0 2px 2px #ffcfb5;
        }
        .icon {
          width: 20px;
        }
      `}
    </style>
  </div>
);

export default Buttons;
