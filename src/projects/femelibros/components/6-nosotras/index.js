import Left from './left';
import Right from './right';

const Nosotras = () => (
  <div className="nos" id="nos">
    <Left />
    <Right />
    <section>
      <hr />
      <div>
        <div className="facebook" />
        <div className="instagram" />
        <div className="twitter" />
      </div>
      <hr />
    </section>
    <style jsx>
      {`
        .nos {
          width: 100vw;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #f7ead7;
          flex-wrap: wrap;
          padding: 4em 0;
        }
        section {
          width: 100vw;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          padding: 1em;
        }
        div {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .facebook,
        .instagram,
        .twitter {
          width: 30px;
          height: 30px;
          margin: 0 0.5em;
          background: #2f3b44;
        }
        .facebook {
          -webkit-mask: url(icons/facebook.svg) no-repeat;
        }
        .instagram {
          -webkit-mask: url(icons/instagram.svg) no-repeat;
        }
        .twitter {
          -webkit-mask: url(icons/twitter.svg) no-repeat;
        }

        hr {
          width: 200px;
          height: 2px;
          background: #2f3b44;
        }
        // =========================================
        @media (max-width: 1199px) {
          .right {
            padding: 1em;
            width: 400px;
          }
        }
        @media (max-width: 545px) {
          section {
            flex-flow: column;
          }
          div {
            padding: 0.5em 0;
          }
        }
      `}
    </style>
  </div>
);

export default Nosotras;
