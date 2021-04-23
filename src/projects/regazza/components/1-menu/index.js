
import Bars from './bars';
import Logo from './logo';
import Social from './social';


const Menu = () => (

  <div className="menu">
    <Bars
    />
    <Logo />
    <Social />

    <style jsx>
      {`
        .menu {
          width: 100vw;
          height: 50px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 3em 2em;
        }
      `}
    </style>
  </div>
);

export default Menu;
