const Card2 = props => (
  <div className="card" onClick={props.onClick}>
    <div className="top">
      <h4>
        Sammie <br /> Turner
      </h4>
      <p>Teacher</p>
    </div>
    <div className="bottom">
      <div className="box">
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
          padding: 0.5em;
          margin: 0.5em;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-flow: column;
          background-image: url(/images/teacher.jpg);
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          cursor: pointer;
        }
        .card:hover {
          box-shadow: 0.3em 0.3em 0.5em silver;
          cursor: pointer;
          /* background: hsla(0, 0%, 0%, 0.657); */
        }
        .card1:hover {
          box-shadow: 0.3em 0.3em 0.5em silver;
        }
        .top {
          flex: 1;
          width: 100%;
          height: 100%;
          padding: 0.5em;
          display: flex;
          justify-content: center;
          flex-flow: column;
        }
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
          flex: 9;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: flex-end;
          border-radius: 0.5em;
        }
        .box {
          width: 100%;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          background: hsla(0, 0%, 100%, 0.8);
          border-radius: 0.5em;
          padding: 0.4em 0;
          margin: 0 0 0.5em 0;
        }

        .icon {
          width: 40px;
          height: 40px;
          border-radius: 0.5em;
          color: white;
        }

        .icon:nth-child(1) {
          -webkit-mask: url(/icon/facebook.svg) no-repeat 100% 100%;
          background: #1c1c1c;
        }
        .icon:nth-child(2) {
          -webkit-mask: url(/icon/instagram.svg) no-repeat 100% 100%;
          background: #1c1c1c;
        }
        .icon:nth-child(3) {
          -webkit-mask: url(/icon/whatsapp.svg) no-repeat 100% 100%;
          background: #1c1c1c;
        }
        .icon:nth-child(4) {
          -webkit-mask: url(/icon/linkedin.svg) no-repeat 100% 100%;
          background: #1c1c1c;
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

export default Card2;
