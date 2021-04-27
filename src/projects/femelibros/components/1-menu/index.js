import Logo from './logo';
import Navbar from './navbar';

const Menu = () => (
  <div className="menu">
    <Logo />
    <Navbar />
    <h4>Sign</h4>
    <style jsx>
      {`
        .menu {
          width: 100vw;
          background-color: #2f2329;
          color: white;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          padding: 1.5em 0;
        }

        h4 {
          color: white;
          background: #b28563;
          border-radius: 0.5em;
          padding: 0.5em 1.5em;
        }
      `}
    </style>
  </div>
);

export default Menu;
