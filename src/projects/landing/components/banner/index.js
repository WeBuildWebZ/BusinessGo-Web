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
          border-radius: 50px;
          border-style: solid;
          border-width: 1px;
      `}
    </style>
  </div>
);

export default Banner;
