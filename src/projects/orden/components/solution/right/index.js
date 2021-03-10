const Right = () => (
  <div className="right">
    <img src="/images/armario.jpg" alt="" />
    <style jsx>
      {`
        .right {
          min-width: 600px;
          display: flex;
        }
        img {
          width: 500px;
          height: 500px;
          object-fit: cover;
          border-radius: 1em;
        }
        @media (max-width: 1199px) {
          .right {
            display: none;
          }
        }
      `}
    </style>
  </div>
);

export default Right;
