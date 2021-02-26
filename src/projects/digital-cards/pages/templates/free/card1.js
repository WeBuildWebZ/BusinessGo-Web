const Card1 = () => (
  <div className="card">
    <div className="top">
      <h2>Nike</h2>
      <p>Explore</p>
    </div>
    <div className="bottom">
      <img src="/icon/facebook.svg" alt="" />
      <img src="/icon/instagram.svg" alt="" />
      <img src="/icon/messenger.svg" alt="" />
      <img src="/icon/linkedin.svg" alt="" />
    </div>
    <div className="select">
      <img src="/icon/hand.svg" alt="" />
      <h5>Presione un icono para elegir.</h5>
    </div>
    <style jsx>
      {`
        .card {
          width: 18.5em;
          height: 32em;
          border: 0.2em solid #ebebeb;
          border-radius: 1em;
          padding: 0.5em;
          margin: 0.5em;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-flow: column;
        }

        .top {
          flex: 8;
          width: 100%;
          height: 100%;
          padding: 0.5em;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-flow: column;
          position: relative;
        }
        h2 {
          font-size: 7em;
          font-weight: bold;
          transform: rotate(-90deg);
        }
        p {
          position: absolute;
          bottom: 0;
          background: #ebebeb;
          font-weight: bold;
          width: 50%;
          text-align: center;
          padding: 0.3em 0;
          letter-spacing: 0.5em;
        }

        //   =========================================================================

        .bottom {
          flex: 1;
          width: 100%;
          height: 100%;
          padding: 0.5em;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
        }
        .bottom img {
          width: 30px;
          height: 30px;
        }
        // ===========================================================================

        .select {
          flex: 1;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-image: linear-gradient(to right, #2e2e2e 0%, black 100%);
          color: white;
          border-radius: 0.5em;
        }
        h5 {
          font-size: 0.9em;
        }
        .select img {
          width: 25px;
          height: 25px;
          margin-right: 10px;
          background: white;
          border-radius: 0.5em;
        }
      `}
    </style>
  </div>
);

export default Card1;
