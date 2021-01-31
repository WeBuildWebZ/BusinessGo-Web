const BannerSegundo = () => (
  <div className="about">
    <div className="left" data-aos="fade-right">
      <img
        src="/images/segundo-banner.jpg"
        alt="segunda imagen banner"
        width={400}
        height={400}
        className="radius"
      />
    </div>
    <div className="right" data-aos="fade-left">
      <div className="textlayout">
        <h3>Sabías que...?</h3>
        <div data-aos="flip-right">
          <span>
            <p>
              El 80% de los negocios son en Internet?, y en su casi totalidad, son efectuados en dispositivos
              Móbiles? nosotros podemos ayudarte, queremos.
            </p>
          </span>
        </div>
      </div>
    </div>
    <style jsx>
      {`
        .about {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100vw;
          height: 100vh;
          padding: 2em;
        }

        .left {
          flex: 1;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 1em;
          position: relative;
        }
        p {
          font-size: 1.4em;
          font-style: italic;
        }

        .left::after {
          content: '';
          position: absolute;
          width: 14em;
          height: 14em;
          top: 0;
          right: 20%;
          border-radius: 50%;
          border: 5px solid white;
          background: #00a1e5;
        }
        .left::before {
          content: '';
          position: absolute;
          width: 14em;
          height: 14em;
          bottom: 5%;
          left: 10%;
          border-radius: 50%;
          background: #ffb52a;
          z-index: -10;
        }

        .radius {
          border-radius: 50%;
        }

        .right {
          flex: 1;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 1em;
          position: relative;
        }
        .right:after {
          content: 'WeBuildWebz';
          position: absolute;
          width: 100px;
          height: 100%;
          left: -20px;
          writing-mode: vertical-lr;
          font-size: 4em;
          color: #ebebeb;
          z-index: 100;
        }
        .right:before {
          content: '';
          position: absolute;
          width: 6em;
          height: 6em;
          bottom: 0;
          right: 30%;
          background: white;
          border: 9px solid silver;
          border-radius: 50%;
          box-shadow: 2px 2px 0.5em silver;
        }

        .textlayout {
          width: 70%;
          height: 50%;
          border: 3px solid #ffb52a;
          border-radius: 1em;
          padding: 1em;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-flow: column;
          box-shadow: 2px 2px 1em silver;
          position: relative;
        }

        .textlayout:after {
          content: '';
          position: absolute;
          width: 1em;
          height: 1em;
          top: 1em;
          left: 1em;
          background: white;
          border: 3px solid silver;
          border-radius: 50%;
        }
        .textlayout::before {
          content: '';
          position: absolute;
          width: 3em;
          height: 3em;
          top: -7em;
          left: 4em;
          background: white;
          border: 6px solid #ffb52a;
          border-radius: 50%;
          box-shadow: 2px 2px 0.5em silver;
        }

        .textlayout h3 {
          width: 100%;
          text-align: left;
          color: #1c1c1c;
          font-size: 2em;
          margin-bottom: 0.5em;
        }
        .textlayout p {
          width: 100%;
          text-align: left;
        }
        .textlayout h2 {
          margin-top: 1em;
          font-size: 2em;
          text-align: center;
          color: black;
        }
      `}
    </style>
  </div>
);

export default BannerSegundo;
