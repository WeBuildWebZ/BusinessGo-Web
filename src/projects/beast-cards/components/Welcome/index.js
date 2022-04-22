const Welcome = () => (
  <div className="flex">
    <div className="container">
      <p className="text">
        Beast Cards, es el 1er juego play-to-play y play-to-earn del mundo, juega contra otro jugador para
        obtener rendimientos en $BC en las diferentes arenas de combates, mejora tu mazo, prepara tu
        estrategia y se el mejor entrenador de bestias del metaverso
      </p>
    </div>
    <style jsx>
      {`
        .flex {
          display: flex;
        }
        .container {
          display: flex;
          flex-direction: column;
        }
        .text {
          color: #fff;
        }
      `}
    </style>
  </div>
);

export default Welcome;
