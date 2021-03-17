import Navbar from '../navbar';

import Left from './left';
import Right from './right';

const Banner = () => (
  <div className="banner">
    <Navbar />
    <Left />
    <Right />

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#f5efef"
        fillOpacity="1"
        d="M0,256L60,261.3C120,267,240,277,360,261.3C480,245,600,203,720,170.7C840,139,960,117,1080,112C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      />
    </svg>
    <style jsx>
      {`
        .banner {
          width: 100vw;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          background-image: linear-gradient(to top, #6a85b6 0%, #bac8e0 100%);
          position: relative;
        }
        svg {
          width: 100vw;
          position: absolute;
          bottom: 0;
        }
      `}
    </style>
  </div>
);

export default Banner;
