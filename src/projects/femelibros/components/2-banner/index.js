import Menu from '../1-menu';
import Arrow from '../11-flecha';

const Banner = () => (
  <div className="banner">
    <Menu />
    <div className="text-container">
      <div className="text">
        <h3>Lorem ipsum sit.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora minus voluptatem fuga nobis earum
          facilis.
        </p>
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
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          padding: 0 1em;
        }

        h3 {
          font-size: 3em;
          line-height: 1em;
          color: #ffa489;
        }
        p {
          font-size: 2em;
          font-style: italic;
          line-height: 1em;
          padding: 0.5em 0;
        }
        // =====================RESPONSIVE===============================================
        @media (max-width: 582px) {
        }
      `}
    </style>
  </div>
);

export default Banner;
