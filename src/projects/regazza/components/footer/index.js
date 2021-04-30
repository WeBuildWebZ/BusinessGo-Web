import FooterLinks from './footer-links';

const Footer = () => (
  <div className="footer">
    <h2>Regazza Bags</h2>
    <FooterLinks />
    <pre>
      Copyright © 2021 Regazza Bags. All right reserved. Products and specifications are subject to change
      without notice
    </pre>

    <style jsx>
      {`
        .footer {
          width: 100vw;
          min-height: 50vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-flow: column;
          background: black;
          user-select: none;
        }
        h2 {
          width: 100%;
          text-align: center;
          color: #ebebeb;
          cursor: pointer;
          font-size: 3em;
          margin-bottom: 1em;
        }
        h2:hover {
          color: white;
        }

        pre {
          color: silver;
          font-size: 0.8em;
          margin-top: 2em;
        }
      `}
    </style>
  </div>
);

export default Footer;
