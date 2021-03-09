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
        }
      `}
    </style>
  </div>
);

export default Right;
