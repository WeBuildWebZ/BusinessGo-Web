const Right = () => (
  <div className="image">
    <img src="/images/she.jpg" alt="ñalal" />
    <style jsx>
      {`
        .image {
          min-width: 600px;
          min-height: 90vh;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 300;
        }
        img {
          width: 550px;
          height: 550px;
          object-fit: cover;
          border-radius: 0 8em;
          -moz-transform: scaleX(-1);
          -o-transform: scaleX(-1);
          -webkit-transform: scaleX(-1);
          transform: scaleX(-1);
        }

        // =========================================
        @media (max-width: 550px) {
          img {
            width: 100vw;
            height: 550px;
          }
        }
      `}
    </style>
  </div>
);

export default Right;
