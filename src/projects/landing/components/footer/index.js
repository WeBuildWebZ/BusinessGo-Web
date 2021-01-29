const Footer = () => (
  <div className="footer">
    <h4>Footer</h4>
    <span className="text">
      <span>
        <p>hola</p>
        <p>hola</p>
        <p>hola</p>
      </span>
      <span>
        <p>hola</p>
        <p>hola</p>
        <p>hola</p>
      </span>
      <span>
        <p>hola</p>
        <p>hola</p>
        <p>hola</p>
      </span>
    </span>

    <style jsx>
      {`
        .footer {
          width: 100vw;
          height: 20vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-flow: column;
          background: #1c1c1c;
        }
        h4 {
          width: 100vw;
          color: silver;
          text-align: center;
        }
        .text {
          flex: 1;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        span {
          margin: 0 1em;
        }
        p {
          color: silver;
        }
        p:hover {
          color: white;
        }
      `}
    </style>
  </div>
);

export default Footer;
