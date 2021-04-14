const recents = [
  {
    photo: '/images/pic1.png',
    material: 'cuero pv',
    peso: '1.2 kg',
    color: 'beige'
  },
  {
    photo: '/images/pic1.png',
    material: 'cuero pv',
    peso: '1.2 kg',
    color: 'beige'
  },
  {
    photo: '/images/pic1.png',
    material: 'cuero pv',
    peso: '1.2 kg',
    color: 'beige'
  },
  {
    photo: '/images/pic1.png',
    material: 'cuero pv',
    peso: '1.2 kg',
    color: 'beige'
  }
];

const Recents = () => (
  <div className="recents">
    <div className="up">
      <h5>Deluxe Style</h5>
      <h2>Lanzamientos Recientes !</h2>
      <p>
        Estos son nuestros ultimos lanzamientos, basados en lo novedoso, nos alineamos con la tendencia
        mundial, esperamos sea de tu agrado.
      </p>
    </div>
    {recents.map(({ photo, material, peso, color }, i) => (
      <div className="card" key={i}>
        <div
          className="pic"
          style={{
            backgroundImage: `url( ${photo})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
        />
        <div className="text">
          <h4>{material}</h4>
          <h4>{peso}</h4>
          <h4>{color}</h4>
        </div>
      </div>
    ))}
    <div className="bottom">
      <button>Ver Galeria</button>
    </div>
    <style jsx>
      {`
        .recents {
          width: 100vw;
          height: 100vh;
          background: white;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }
        .up {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }
        h5 {
          width: 100vw;
          text-align: center;
          color: #fda085;
        }
        h2 {
          width: 100vw;
          text-align: center;
          margin: 0;
          font-size: 2em;
        }
        p {
          width: 100vw;
          text-align: center;
          margin: 0;
        }
        .card {
          width: 250px;
          height: 400px;
          display: flex;
          flex-flow: column;
          background: white;
          border-radius: 0.5em;
          border: 3px solid #ebebeb;
          margin: 1em;
          cursor: pointer;
        }
        .card:hover {
          border: 3px solid #fda085;
        }
        // ================
        .pic,
        .text {
          width: 100%;
          height: 100%;
        }
        .pic {
          flex: 3;
        }
        .text {
          flex: 1;
          padding: 1em;
        }
        h4 {
          margin: 0;
        }
        // ========================================
        .bottom {
          width: 100vw;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        button {
          background-image: linear-gradient(120deg, #f6d365 0%, #f8ac30 100%);
          border-radius: 9px;
          cursor: pointer;
          outline: none;
          border: none;
          width: 200px;
          height: 50px;
          font-weight: bold;
          font-size: 1.3em;
        }
        button:hover {
          color: white;
        }
      `}
    </style>
  </div>
);

export default Recents;
