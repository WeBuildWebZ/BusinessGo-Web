const Welcome = () => (
  <div className="welcome">
    <div className="flexContainer">
      <p className="text">
        Beast Cards, es el 1er juego play-to-play y play-to-earn del mundo, juega contra otro jugador para
        obtener rendimientos en $BC en las diferentes arenas de combates, mejora tu mazo, prepara tu
        estrategia y se el mejor entrenador de bestias del metaverso
      </p>
    </div>
    <style jsx>
      {`
        .welcome {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
        }
        .flexContainer {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          max-width: 250px;
        }
        .text {
          color: #fff;
        }
      `}
    </style>
  </div>
);

export default Welcome;
