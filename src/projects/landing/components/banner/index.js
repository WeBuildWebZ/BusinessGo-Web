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
      `}
    </style>
  </div>
);

export default Banner;
