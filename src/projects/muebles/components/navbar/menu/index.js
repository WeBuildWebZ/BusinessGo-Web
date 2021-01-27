const Menu = () => (
  <div className="menu">
    <h5>Productos</h5>

    <h5>Carrito</h5>

    <h5>Contacto</h5>

    <style jsx>
      {`
        .menu {
          flex: 1;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding: 0 2em 0 0;
        }
        h5 {
          margin: 0 0.5em;
          cursor: pointer;
        }
        h5:hover {
          color: #ffa51d;
        }
      `}
    </style>
  </div>
);

export default Menu;
