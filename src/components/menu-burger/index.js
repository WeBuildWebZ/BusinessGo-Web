const burger = document.querySelector('#burger');
const nav = document.querySelector('#nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('spread');
});

const Menu = () => (
  <div className="menu">
    <div className="card">
      <span className="top-icons">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="burger">
          <path d="M4 6H20V8H4zM8 11H20V13H8zM13 16H20V18H13z" />
        </svg>
      </span>

      <nav id="nav">
        <a href="inicio">inicio</a>
        <a href="nosotros">nosotros</a>
        <a href="productos">productos</a>
        <a href="precios">precios</a>
        <a href="contacto">contacto</a>
      </nav>
    </div>
    <style jsx>
      {`
        .card {
          width: 100%;
          height: 200px;
          display: flex;
          flex-flow: column;
          box-shadow: 0.3em 0.3em 0.5em hsla(0, 0%, 0%, 0.349);
          border-radius: 2em;
          padding: 0.5em;
          background: white;
        }

        /* top */
        .top-icons {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          width: 100%;
          background: pink;
        }

        .top-icons i {
          font-size: 2em;
          color: rgb(12, 7, 0);
        }

        /* ==================================================== */
        #burger {
          z-index: 100;
          background: white;
          border-radius: 0.5em;
        }
        /* NAV */
        nav {
          width: 100%;
          height: 60%;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          flex-flow: column;
          background: rgb(0, 0, 0, 0.8);
          transition: transform 0.5s ease-in;
          transform: translatey(-300px);
          opacity: 0;
        }

        a {
          margin: 0 0 0.3em 1em;
          text-decoration: none;
          font-size: 1.5em;
          color: silver;
        }

        .spread {
          transform: translateY(10px);
          opacity: 1;
        }
      `}
    </style>
  </div>
);

export default Menu;
