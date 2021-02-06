import Right from '../BannerRight';

import Left from './left';

const Banner = props => (
  <div className="banner">
    <Left />
    <Right />

    <style jsx>
      {`
        .banner {
          width: 100vw;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          padding: 1em;
          transition: 0.5s;
        }
        @media (max-width: 1286px) {
          .banner {
            flex-flow: column;
            height: 100%;
          }
        }
      `}
    </style>
  </div>
);

export default Banner;
