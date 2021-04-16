import Navbar from "./navbar/navbar";
import Logo from "../i-logo";

const Menu = () => {
  return (
    <div className="menu">
      <Logo />
      <Navbar />
      <style jsx>
        {`
          .menu {
            width: 100vw;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 2em;
          }
        `}
      </style>
    </div>
  );
};

export default Menu;
