const TresCards = () => (
  <div className="TresCards">
    <div className="card1">
      <h4>Increibles ofertas!</h4>
    </div>
    <div className="card2">
      <h4>Lo mejor para ti!</h4>
    </div>
    <div className="card3">
      <h4>Solo entra y mira!</h4>
    </div>

    <style jsx>
      {`
        .TresCards {
          width: 100vw;
          height: 50vh;
          background-image: url(/images/card1.jpg);
          margin: 2em 0;
          // padding:0 2em 2em 1em;
          position: relative;
        }

        .card1,
        .card2,
        .card3 {
          width: 260px;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 5px;
          padding: 1em;
          border-radius: 1em;
          background: hsla(0, 0%, 0%, 0.9);
          color: white;
        }
        .card1:hover,
        .card2:hover,
        .card3:hover {
          border: 4px solid white;
        }
        .card1 {
          position: absolute;
          bottom: -3em;
          left: 4em;
        }
        .card2 {
          position: absolute;
          bottom: -3em;
          right: 5em;
        }
        .card3 {
          position: absolute;
          bottom: -3em;
          left: 40%;
        }
      `}
    </style>
  </div>
);
export default TresCards;
