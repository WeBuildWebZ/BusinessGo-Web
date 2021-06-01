const Right = () => (
  <div className="right">
    <div className="image" />
    <style jsx>
      {`
        .right {
          width: 100%;
          flex: 1;
          display: flex;
          align-items: center;
        }
        .image {
          width: 450px;
          min-height: 400px;
          background-image: url(/images/banner.png);
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
        }
        // ============================================
        @media (max-width: 889px) {
          .right {
            justify-content: center;
          }
        }
      `}
    </style>
  </div>
);

export default Right;
