import Logo from './logo';
import FraseLogo from './frase-logo';

const LogoBanner = () => (
  <div className="logobanner">
    <Logo />
    <FraseLogo />
    <style jsx>
      {`
        .logobanner {
          width: 100vw;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap-reverse;
          padding: 1em 0.5em;
          background: #1c1c1c;
        }
        @media (max-width: 485px) {
          .logobanner {
            flex-flow: column;
          }
        }
      `}
    </style>
  </div>
);

export default LogoBanner;
