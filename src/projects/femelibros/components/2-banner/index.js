import Menu from '../1-menu';
import Arrow from '../11-flecha';

const Banner = () => (
  <div className="banner">
    <Menu />
    <div className="text-container">
      <div className="text">
        <h3>Es hora de</h3>
        <ul>
          <li>Cambiar</li>
          <li>Leer</li>
          <li>Encontrar</li>
        </ul>
      </div>
      <br />
      <Arrow />
    </div>

    <style jsx>
      {`
        .banner {
          width: 100vw;
          min-height: 100vh;
          background-image: url(https://images.pexels.com/photos/3771127/pexels-photo-3771127.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
          background-size: contain;
          background-position: right;
          background-repeat: no-repeat;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-flow: column;
        }

        // ========================================
        .text-container {
          flex: 9;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-flow: column;
          padding: 0 2.5em 0 0;
        }
        .text {
          width: 500px;
          height: 40px;
          font-size: 40px;
          line-height: 1em;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }

        h3 {
          line-height: 1em;
          color: #ffa489;
        }

        ul {
          list-style: none;
          padding-left: 10px;
          animation: cambiar 7s infinite;
        }
        h3,
        ul,
        li {
          margin: 0;
        }

        li {
          font-weight: bold;
        }
        @keyframes cambiar {
          0% {
            margin-top: 0;
          }
          20% {
            margin-top: 0;
          }

          25% {
            margin-top: -80px;
          }
          50% {
            margin-top: -80px;
          }

          55% {
            margin-top: 80px;
          }
          80% {
            margin-top: 80px;
          }

          85% {
            margin-top: -80px;
          }
          95% {
            margin-top: -80px;
          }

          100% {
            margin-top: 0;
          }
        }
        // =====================RESPONSIVE===============================================
        @media (max-width: 582px) {
        }
      `}
    </style>
  </div>
);

export default Banner;
