import Title from '../title';

const FireVideo = () => (
  <>
    <br />
    <br />
    <Title title="Descubre" />
    <div className="videoContainer" id="descubre">
      <video className="video" src={globalThis.getAssetUrl('videos/fire.mp4')} autoPlay muted loop />
      <div className="p_box">
        <p>
          Beast Cards, es el 1er juego play-to-play y play-to-earn del mundo, juega contra otro jugador para
          obtener rendimientos en $BC en las diferentes arenas de combates, mejora tu mazo, prepara tu
          estrategia y se el mejor entrenador de bestias del metaverso
        </p>
      </div>
    </div>
    <style jsx>
      {`
        .videoContainer {
          position: relative;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
        }
        .videoContainer .p_box {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100vw;
          height: 100vh;
          background-color: hsla(0, 0%, 0%, 0.9);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .videoContainer .p_box p {
          width: 700px;
          color: white;
          font-size: 30px;
        }
        .video {
          display: block;
          width: 100%;
        }

        @media only screen and (max-width: 768px) {
          .video {
            width: 200%;
            margin-top: 0;
            margin-left: -50%;
          }
        }
      `}
    </style>
  </>
);

export default FireVideo;
