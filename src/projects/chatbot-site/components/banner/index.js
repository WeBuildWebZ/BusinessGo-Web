import Left from './left';

const Banner = () => (
  <div className="banner">
    <Left />
    <style jsx>
      {`
        .banner {
          width: 100vw;
          height: 100vh;
          display: flex;
          background-image: url(/images/banner.jpg);
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
        @media (max-width: 1085px) {
          .banner {
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      `}
    </style>
  </div>
);

export default Banner;
