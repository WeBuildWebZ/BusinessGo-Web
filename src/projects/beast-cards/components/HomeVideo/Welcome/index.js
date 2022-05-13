const Welcome = () => (
  <div className="welcome">
    <button className="button">Live</button>
    <div className="row">
      <p className="text">Sé el mejor entrenador de bestias del metaverso</p>
      <button className="button2">Ver</button>
    </div>
    <p className="date">
      {new Date().toLocaleDateString('es-MX', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })}
    </p>
    <style jsx>
      {`
        .welcome {
          width: 550px;
          background-color: hsla(0, 0%, 0%, 0.9);
          border-top-right-radius: 50px;
          padding: 2em;
          display: flex;
          flex-flow: column;
          position: absolute;
          bottom: 0;
          left: 0;
        }
        button {
          width: 40px;
          background-color: #2966ff;
          color: #fff;
          border: none;
          outline: none;
          border-radius: 10px;
          font-weight: bold;
          font-size: 10px;
          padding: 5px 0;
        }
        .row {
          width: 100%;
          height: 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .button2 {
          width: 100px;
          height: 40px;
          background-image: linear-gradient(to right, #e3890c, #f5b723);
          color: #fff;
          border: none;
          outline: none;
          border-radius: 20px;
          font-weight: bold;
          font-size: 18px;
        }
        .text {
          color: #fff;
          font-size: 20px;
          font-weight: bold;
        }
        .date {
          color: #fff;
          font-size: 12px;
          font-weight: bold;
          padding: 0;
          margin: 0;
        }
        @media (max-width: 832px) {
          .welcome {
            min-width: 100vw;
            padding: 0;
          }
        }
      `}
    </style>
  </div>
);

export default Welcome;
