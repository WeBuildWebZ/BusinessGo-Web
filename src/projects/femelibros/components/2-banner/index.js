import Boxs from '../3-boxs';
import Menu from '../1-menu';
import Arrow from '../11-flecha';

const Banner = () => (
  <div className="banner">
    <Menu />
    <div className="text-container">
      <div className="text">
        <h3>Lorem ipsum dolor sit.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora minus voluptatem fuga nobis earum
          facilis.
        </p>
      </div>
      <Arrow />
    </div>

    <style jsx>
      {`
        .banner {
          width: 100vw;
          min-height: 100vh;
          background-image: url(https://images.pexels.com/photos/3771127/pexels-photo-3771127.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
          background-size: cover;
          background-position: center;
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
          justify-content: space-between;
          flex-wrap: wrap;
          align-items: flex-end;
          padding: 0 2.5em 0 0;
        }
        .text {
          width: 500px;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          padding: 0 1em;
          background: hsla(0, 0%, 100%, 0.3);
        }

        h3 {
          font-size: 3em;
          line-height: 1em;
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
