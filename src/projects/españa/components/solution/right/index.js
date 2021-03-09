const Right = () => (
  <div className="right">
    <img src="/images/she.jpg" alt="" />
    <style jsx>
      {`
        .right {
          width: 100%;
          min-height: 350px;
          flex: 1;
          display: flex;
          justify-content: center;
          padding: 1em;
        }
        img {
          width: 300px;
          height: 300px;
          object-fit: cover;
        }
      `}
    </style>
  </div>
);

export default Right;
