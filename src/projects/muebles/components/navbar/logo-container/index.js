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
      `}
    </style>
  </div>
);

export default LogoContainer;
