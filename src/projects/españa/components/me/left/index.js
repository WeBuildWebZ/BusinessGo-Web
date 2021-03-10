const Left = () => (
  <div className="left">
    <img src="/images/she.jpg" alt="" />
    <style jsx>
      {`
        .left {
          min-width: 600px;
          min-height: 350px;
          position: relative;
        }
        img {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          border: 3px solid white;
          object-fit: cover;
          position: absolute;
          top: -4em;
          right: 2em;
        }
        // ===========================================
        @media (max-width: 1199px) {
          .left {
            min-height: auto;
          }
          img {
            top: 0;
            left: 0;
          }
        }
      `}
    </style>
  </div>
);

export default Left;
