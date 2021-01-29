const Footer = () => (
  <div className="footer">
    <div className="top" />
    <div className="bottom">
      <span className="column">
        <h5>Ubicacion</h5>
        <p>Buenos Aires</p>
        <p>Argentina</p>
      </span>
      <span className="column">
        <h5>En Medium</h5>
        <p>Posteo #1</p>
        <p>Posteo #2</p>
      </span>
      <span className="column">
        <h5>Redes Sociales</h5>
      </span>
    </div>

    <style jsx>
      {`
        .footer {
          width: 100vw;
          height: 40vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-flow: column;
          background: #0f0f0f;
        }
        .top,
        .bottom {
          display: flex;
          justify-content: center;
          align-items: center;
          flex: 1;
          width: 100%;
          height: 100%;
        }
        .top {
          background-image: linear-gradient(to top, hsla(0, 0%, 100%, 1), hsla(0, 0%, 100%, 0.1)),
            url(images/left-top.jpg);
          background-size: contain;
          background-position: 0;
        }

        .column {
          width: 250px;
          padding: 1em;
          border-radius: 1em;
        }
        .column:nth-child(2) {
          margin: 0 1em;
        }
        h5 {
          color: grey;
        }
        p {
          color: grey;
          margin: 0;
        }
        p:hover {
          color: white;
          cursor: pointer;
        }
      `}
    </style>
  </div>
);

export default Footer;
