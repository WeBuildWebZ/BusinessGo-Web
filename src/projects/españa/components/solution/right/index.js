const Right = () => (
  <div className="right">
    <img src="/images/armario.jpg" alt="" />
    <style jsx>
      {`
        .right {
          width: 100%;
          flex: 1;
          display: flex;
        }
        img {
          width: 700px;
          height: 700px;
          object-fit: cover;
          border-radius: 1em;
        }
      `}
    </style>
  </div>
);

export default Right;
