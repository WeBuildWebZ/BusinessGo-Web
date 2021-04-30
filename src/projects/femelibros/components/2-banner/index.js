import Left from './left';
import Right from './right';

const Banner = () => (
  <div className="banner">
    <Left />
    <Right />

    <style jsx>
      {`
        .banner {
          width: 100vw;
          min-height: 88vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap-reverse;
        }

        // =====================RESPONSIVE===============================================
        @media (max-width: 582px) {
        }
      `}
    </style>
  </div>
);

export default Banner;
