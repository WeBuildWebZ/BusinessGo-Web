const Left = () => (
  <div className="left">
    <img src="/images/image2.jpg" alt="" />
    <style jsx>
      {`
        .left {
          min-width: 500px;
          display: flex;
          justify-content: center;
        }
        img {
          width: 500px;
          height: 500px;
          object-fit: cover;
          border-radius: 1em;
        }
        @media (max-width: 970px) {
          img {
            width: 100%;
            height: 500px;
            border-radius: 0;
          }
        }
      `}
    </style>
  </div>
);

export default Left;
