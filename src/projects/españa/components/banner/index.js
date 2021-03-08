import Navbar from '../navbar';

const Banner = () => (
  <div className="banner">
    <Navbar />
    <div className="content">
      <p>
        kcjnkcjhkjndkjnckdjcnkdjnckdfbfbf <br /> bfbbbbbbbfdbdfbdfbdfbdfjcndkc
      </p>
      <h2>WE MAKE</h2>
      <h2>YOU LIVE</h2>
      <button>Ver lala</button>
    </div>
    <img src="/images/she.jpg" alt="ñalal" />
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#da7c7a"
        fillOpacity="1"
        d="M0,256L60,261.3C120,267,240,277,360,261.3C480,245,600,203,720,170.7C840,139,960,117,1080,112C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      />
    </svg>
    <style jsx>
      {`
        .banner {
          width: 100vw;
          min-height: 100vh;
          background-image: linear-gradient(to right, #6e3e76 0%, #da7c7a 100%);
          position: relative;
        }
        .content {
          width: 600px;
          position: absolute;
          padding-left: 1em;
          top: 30%;
          left: 2em;
          display: flex;
          flex-flow: column;
          z-index: 200;
        }
        p {
          color: white;
        }
        h2 {
          font-size: 5em;
          color: white;
          font-family: playfair display;
        }
        h2:nth-child(3) {
          padding-left: 2em;
          margin: 0 0 0.3em 0;
        }
        button {
          width: 150px;
          padding: 1em 0;
          border: none;
          outline: none;
          background: #f8ac30;
          color: white;
        }

        // =====================================
        img {
          width: 350px;
          height: 450px;
          object-fit: cover;
          position: absolute;
          right: 11em;
          bottom: 4em;
          z-index: 150;
          border-radius: 0 8em;
        }

        // ==============================================
        svg {
          width: 100vw;
          position: absolute;
          bottom: 0;
        }
      `}
    </style>
  </div>
);

export default Banner;
