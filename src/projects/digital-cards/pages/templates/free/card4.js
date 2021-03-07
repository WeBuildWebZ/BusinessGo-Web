const Card4 = () => (
  <div className="card">
    <div className="top">
      <span>
        <h3>
          Sandy <br /> Summers
        </h3>
        <p>Doctor</p>
      </span>
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
        .card:hover {
          box-shadow: 0.3em 0.3em 0.5em silver;
          cursor: pointer;
          /* background: hsla(0, 0%, 0%, 0.657); */
        }

        // ======================

        .top {
          flex: 1;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          background: white;
          border-radius: 15px 15px 70px 70px;
        }

        // =====================
        h3 {
          font-weight: bold;
          line-height: 0.9em;
          letter-spacing: 1px;
          width: 100%;
          margin: 0;
          padding-top: 0.5em;
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
          background-image: linear-gradient(180deg, #2af598 0%, #009efd 100%);
        }
        p {
          width: 100%;
          font-weight: 500;
          padding-top: 0.3em;
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
          background-image: linear-gradient(180deg, #2af598 0%, #009efd 100%);
        }

        //   =========================================================================

        .bottom {
          flex: 8;
          height: 100%;
          display: flex;
        }
        .box {
          width: 50px;
          display: flex;
          justify-content: flex-end;
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
          background-image: linear-gradient(180deg, #2af598 0%, #009efd 100%);
        }
        .icon:nth-child(2) {
          -webkit-mask: url(/icon/slack.svg) no-repeat 100% 100%;
          background-image: linear-gradient(180deg, #2af598 0%, #009efd 100%);
        }
        .icon:nth-child(3) {
          -webkit-mask: url(/icon/whatsapp.svg) no-repeat 100% 100%;
          background-image: linear-gradient(180deg, #2af598 0%, #009efd 100%);
        }
        .icon:nth-child(4) {
          -webkit-mask: url(/icon/ubication.svg) no-repeat 100% 100%;
          background-image: linear-gradient(180deg, #2af598 0%, #009efd 100%);
        }
        .icon:nth-child(5) {
          -webkit-mask: url(/icon/world.svg) no-repeat 100% 100%;
          background-image: linear-gradient(180deg, #2af598 0%, #009efd 100%);
          margin-left: 10px;
        }
        //

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
