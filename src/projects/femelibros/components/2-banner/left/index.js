import Arrow from '../../11-flecha';

const Left = () => (
  <div className="text-container" data-aos="fade-left">
    <div className="text-container">
        <h3>Es Hora de</h3>
      <div className="text">
        <ul>
          <li>Cambiar</li>
          <li>Leer</li>
          <li>Encontrar</li>
        </ul>
      </div>
      <br />
      <br />
      <br />
      <Arrow />
      <style jsx>
        {`
          .text-container {
            width: 600px;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column;
            padding: 0 2.5em 0 0;
            background-image: linear-gradient(to top, #756a6f, hsla(16, 100%, 66%, 0.5)),
              url(/images/image2.jpeg);
            background-size: cover;
            background-repeat: no-repeat;
            position: relative;
          }
          .text-container:before {
            width: 100%;
            height: 10px;
            height: ;
            background: white;
            content: '';
            position: absolute;
            bottom: 2em;
            left: 0;
          }
          .text-container:after {
            color: white;
            content: '...';
            font-size: 6em;
            position: absolute;
            bottom: 1em;
            left: 1em;
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
            color: white;
            font-size:2em;
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


          // =================RESPONSIVE==========================================
          @media(max-width:416px){
            .text-container:after {
            
            left: 2em;
          }


          }
        `}
      </style>
    </div>
  </div>
);

export default Left;
