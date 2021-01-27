import Left from './left';
import Mid from './mid';
import Right from './right';

const Banner = () => (
  <div className="banner">
    <Left />
    <Mid />
    <Right />

    <style jsx>
      {`
        .banner {
          width: 100vw;
          height: 100vh;
          display: flex;
          padding:2em 5em;
      `}
    </style>
  </div>
);

export default Banner;
