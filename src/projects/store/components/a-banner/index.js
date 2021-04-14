const Banner = () => (
  <div className="banner">
    <h2>banner</h2>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="wave">
      <path
        fill="#ebebeb"
        fillOpacity="1"
        d="M0,224L80,202.7C160,181,320,139,480,128C640,117,800,139,960,154.7C1120,171,1280,181,1360,186.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      />
    </svg>
    <style jsx>
      {`
        .banner {
          width: 100vw;
          height: 100vh;
          background-image: linear-gradient(120deg, #f6d365 0%, #f8ac30 100%);
          position: relative;
        }
        .wave {
          position: absolute;
          bottom: 0;
          width: 100vw;
        }
      `}
    </style>
  </div>
);

export default Banner;
