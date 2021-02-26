const Card4 = () => (
  <div className="card">
    <div className="top">
      <div className="custom-shape-divider-top-1614316994">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          />
        </svg>
      </div>
    </div>
    <div className="bottom">
      <div className="box">
        <div className="icon" />
        <div className="icon" />
        <div className="icon" />
        <div className="icon" />
        <div className="icon" />
      </div>
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
          margin: 0.5em;
          display: flex;
          flex-flow: column;
          background-image: url(/images/doctora.jpg);
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        .card1:hover {
          box-shadow: 0.3em 0.3em 0.5em silver;
        }
        .top {
          flex: 2;
          width: 100%;
          height: 100%;
          border-radius: 1em;
          position: relative;
        }
        // ======================

        .custom-shape-divider-top-1614316994 {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
        }

        .custom-shape-divider-top-1614316994 svg {
          position: relative;
          display: block;
          width: calc(300% + 1.3px);
          height: 100px;
          transform: rotateY(180deg);
        }

        .custom-shape-divider-top-1614316994 .shape-fill {
          fill: #b65d5d;
        }
        Download SVG
        // =====================
        h4 {
          font-weight: bold;
          line-height: 0.9em;
          letter-spacing: 1px;
        }
        p {
          font-weight: 500;
        }

        //   =========================================================================

        .bottom {
          flex: 7;
          height: 100%;
          display: flex;
        }
        .box {
          width: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-flow: column;
          border-radius: 0.5em;
        }

        .icon {
          width: 40px;
          height: 40px;
          margin: 0.5em 0;
        }

        .icon:nth-child(1) {
          -webkit-mask: url(/icon/facebook.svg) no-repeat 100% 100%;
          background-image: linear-gradient(to top, rgb(144, 101, 22), orange);
        }
        .icon:nth-child(2) {
          -webkit-mask: url(/icon/slack.svg) no-repeat 100% 100%;
          background-image: linear-gradient(to top, rgb(144, 101, 22), orange);
        }
        .icon:nth-child(3) {
          -webkit-mask: url(/icon/whatsapp.svg) no-repeat 100% 100%;
          background-image: linear-gradient(to top, rgb(144, 101, 22), orange);
        }
        .icon:nth-child(4) {
          -webkit-mask: url(/icon/ubication.svg) no-repeat 100% 100%;
          background-image: linear-gradient(to top, rgb(144, 101, 22), orange);
        }
        .icon:nth-child(5) {
          -webkit-mask: url(/icon/world.svg) no-repeat 100% 100%;
          background-image: linear-gradient(to top, rgb(144, 101, 22), orange);
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

export default Card4;
