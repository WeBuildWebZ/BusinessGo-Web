import Arrow from '../../11-flecha';

const Left = () => (
  <div className="text-container">
    <div className="text-container">
      <div className="text">
        <h3>Hora de</h3>
        <ul>
          <li>Cambiar</li>
          <li>Leer</li>
          <li>Encontrar</li>
        </ul>
      </div>
      <br />
      <Arrow />
      <style jsx>
        {`
          .text-container {
            width: 600px;
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
        `}
      </style>
    </div>
  </div>
);

export default Left;
