import { Logo } from '../../logo';
import Marca from '../../marca';

const LogoContainer = () => (
  <div className="logocontainer">
    <Logo />
    <Marca />

    <style jsx>
      {`
        .logocontainer {
          flex: 1;
          width: 100vw;
          display: flex;
        }
        @media (max-width: 395px) {
          .logocontainer {
            flex-flow: column;
          }
        }
      `}
    </style>
  </div>
);

export default LogoContainer;
