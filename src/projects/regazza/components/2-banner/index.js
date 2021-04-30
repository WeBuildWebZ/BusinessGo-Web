const Banner = () => (
  <div className="banner">
    <h1>Regazza Bags</h1>
    <p>Elegancia, belleza y todo lo que las flores tienen para ti</p>
    <style jsx>
      {`
        .banner {
          width: 100vw;
          min-height: 100vh;
          background-image: linear-gradient(to left, hsla(0, 0%, 0%, 0.877), hsla(0, 0%, 0%, 0.849)),
            url(images/banner-test.jpg);
          background-size: cover;
          background-position: center;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-flow: column;
        }
        h1,
        p {
          color: white;
          margin: 0;
        }
        p {
          font-style: italic;
        }
      `}
    </style>
  </div>
);

export default Banner;
