export const Banner = () => (
  <div className="banner">
    <h1>Muebles Horacio</h1>
    <h4>Venta directa sin intermediarios</h4>

    <style jsx>
      {`
        .banner {
          width: 100vw;
          height: 90vh;
          background-image: url(/images/banner.jpg);
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-flow: column;
          padding-left: 3em;
        }
        h1,
        h4 {
          color: white;
        }
        h1 {
          font-size: 5em;
        }
      `}
    </style>
  </div>
);
