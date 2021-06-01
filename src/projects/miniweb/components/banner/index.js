import Text from './text';
import Right from './right';

const Banner = () => (
  <div className="banner">
    <Text />
    <Right />
    <style jsx>
      {`
        .banner {
          width: 100vw;
          min-height: 95vh;
          display: flex;
          flex-flow: row;
          padding: 1em;
        }
        // ===================================
        @media (max-width: 889px) {
          .banner {
            flex-flow: column;
          }
        }
      `}
    </style>
  </div>
);

export default Banner;
