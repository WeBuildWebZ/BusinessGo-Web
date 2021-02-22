const Menu = () => (
  <div className="menu">
    <h3>Home</h3>
    <h3>About us</h3>
    <h3>Prices</h3>
    <h3>Contact</h3>

    <style jsx>
      {`
        .menu {
          width: 100%;
          flex: 8;
          display: flex;
          align-items: center;
        }
        h3 {
          margin: 0 1em;
        }
      `}
    </style>
  </div>
);

export default Menu;
