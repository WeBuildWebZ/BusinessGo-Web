const Banner = () => (
  <div className="banner">
    <div className="text">
      <h1>Personal Digital Card</h1>
      <hr />
      <p>
        Utiliza nuestra tecnologia, y comparte tu tarjeta digital, para compartir tu informacion de contacto
        <br /> en 1 segundo.
      </p>
    </div>
    <style jsx>
      {`
        .banner {
          width: 100%;
          height: 95vh;
          display: flex;
          align-items: center;
          background-image: url(/images/banner.jpg);
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
        }
        .text {
          width: 600px;
          height: 100%;
          padding-left: 5em;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-flow: column;
          background: white;
        }
        hr {
          width: 150px;
          height: 2px;
          background: #86a8e7;
        }
        h1 {
          font-size: 4em;
          line-height: 0.9em;
          font-weight: bold;
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
          background-image: linear-gradient(
            to right top,
            #d16ba5,
            #c777b9,
            #ba83ca,
            #aa8fd8,
            #9a9ae1,
            #8aa7ec,
            #79b3f4,
            #69bff8,
            #52cffe,
            #41dfff,
            #46eefa,
            #5ffbf1
          );
        }
        p {
          font-weight: bold;
          text-transform: uppercase;
          color: #1c1c1c;
        }
        p:first-letter {
          font-size: 1.5em;
        }
      `}
    </style>
  </div>
);

export default Banner;
