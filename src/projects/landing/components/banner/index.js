import Left from './left';
import Rigth from './rigth';

const Banner = () => (
  <div className="banner">
    <Left />
    <Rigth />

    <style jsx>
      {`
        .banner {
          width: 100vw;
          height: 100vh;
          display: flex;
          padding:2em 3em 0 2em;
      `}
    </style>
  </div>
);

export default Banner;
