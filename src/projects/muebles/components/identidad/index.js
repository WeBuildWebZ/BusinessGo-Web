const Identidad = () => (
  <div className="identidad">
    <div className="box">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="home"
        className="svg-inline--fa fa-home fa-w-18"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
      >
        <path
          fill="white"
          d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
        />
      </svg>
      <h2>MUEBLES</h2>
      <h2>HORACIO</h2>
    </div>
    <style jsx>
      {`
        .identidad {
          width: 100vw;
          height: 50vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background-attachment: fixed;
          background-image: url(/images/scrollable.jpg);
          background-position: 0;
          background-repeat: no-repeat;
          background-size: cover;
          margin: 4em 0;
        }
        .box {
          width: 300px;
          heigth: 300px;
        }
        .fa-home {
          width: 50px;
          heigth: 50px;
        }
        h2 {
          width: 100%;
          color: white;
          padding: 0;
          margin: 0;
        }
        @media (max-width: 661px) {
          .identidad {
            background-attachment: unset;
          }
        }
      `}
    </style>
  </div>
);

export default Identidad;
