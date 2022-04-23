const Welcome = () => (
  <div className="absoluteContainer">
    <div className="flexContainer">
      <p className="text">
        Beast Cards, es el 1er juego play-to-play y play-to-earn del mundo, juega contra otro jugador para
        obtener rendimientos en $BC en las diferentes arenas de combates, mejora tu mazo, prepara tu
        estrategia y se el mejor entrenador de bestias del metaverso
      </p>
    </div>
    <style jsx>
      {`
        .absoluteContainer {
          display: flex;
          justify-content: center;
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
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
