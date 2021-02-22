const Paragraphs = () => (
  <div className="text">
    <p>
      Tellus senectus turpis dapibus quis id quam metus. Bibendum vel vivamus lobortis suscipit vitae
      malesuada aenean senectus dignissim
    </p>
    <p>
      Tellus senectus turpis dapibus quis id quam metus. Bibendum vel vivamus lobortis suscipit vitae
      malesuada aenean senectus dignissim
    </p>
    <p>
      Tellus senectus turpis dapibus quis id quam metus. Bibendum vel vivamus lobortis suscipit vitae
      malesuada aenean senectus dignissim
    </p>
    <style jsx>
      {`
        .text {
          width: 100vw;
          height: 50vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }
        P {
          width: 300px;
          text-style: italic;
          padding: 1.5em;
          text-align: justify;
        }
      `}
    </style>
  </div>
);

export default Paragraphs;
