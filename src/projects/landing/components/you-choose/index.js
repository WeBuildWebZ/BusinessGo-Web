const YouChoose = () => (
  <div className="precios">
    <div className="choose">
      <h3 data-aos="fade-right">You Choose!</h3>
      <p data-aos="fade-left">
        Find you apropiated plan and start to planning with us, how do you like beginning? Haz click en el
        boton y chatea conmigo.
      </p>
    </div>

    <style jsx>
      {`
        .precios {
          width: 100vw;
          height: 60vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #ebebeb;
        }

        .choose {
          width: 60em;
          display: flex;
          justify-content: center;
          align-items: center;
          background: white;
          border-radius: 1em;
        }
        h3 {
          color: #2f4858;
          font-size: 3em;
          padding: 0.5em;
        }
        p {
          width: 50%;
          font-size: 1.1em;
          padding: 0.5em;
        }
      `}
    </style>
  </div>
);

export default YouChoose;
