const Menu = () => (
  <div className="menu">
    <h3>Productos</h3>
    <h3>Conócenos</h3>
    <h3>Contacto</h3>

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
        h3 {
          margin: 0 0.5em;
          cursor: pointer;
        }
        h3:hover {
          border-bottom: 3px solid #ffa51d;
          color: #ffa51d;
        }
      `}
    </style>
  </div>
);

export default Menu;
