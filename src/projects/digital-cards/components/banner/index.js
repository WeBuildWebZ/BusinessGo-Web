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
          height: 95vh;
          display: flex;
          padding: 1em;
        }
      `}
    </style>
  </div>
);

export default Banner;
