import Link from 'next/link';
import { useState } from 'react';
import PropTypes from 'prop-types';

const MenuBurger = ({ links }) => {
  const [spread, setSpread] = useState(false);

  const handleToggle = () => {
    setSpread(!spread);
  };

  return (
    <div className="menu">
      <div className="card">
        <span className="top-icons">
          {spread ? (
            <svg
              className="burger"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
              onClick={handleToggle}
              viewBox="0 0 45 45"
            >
              <path d="M12.45 37.65 10.35 35.55 21.9 24 10.35 12.45 12.45 10.35 24 21.9 35.55 10.35 37.65 12.45 26.1 24 37.65 35.55 35.55 37.65 24 26.1Z" />
            </svg>
          ) : (
            <svg className="burger" width="24" height="24" viewBox="0 0 24 24" onClick={handleToggle}>
              <path d="M4 6H20V8H4zM8 11H20V13H8zM13 16H20V18H13z" />
            </svg>
          )}
        </span>

        <nav className={`nav${spread ? ' spread' : ''}`}>
          {links.map((link, i) => (
            <Link key={i} href={link.href}>
              <a onClick={handleToggle}>{link.text}</a>
            </Link>
          ))}
        </nav>
      </div>
      <style jsx>
        {`
        .menu {
          width: 100vw;
          display: flex;
          flex-flow: column;
          padding-top: 0.5em;
          position: absolute;
          top: 0;
          z-index: 2;
          display:none;
        }

        // ======================================================================
        .top-icons {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          width: 100%;
        }

        .top-icons i {
          font-size: 2em;
          color: rgb(12, 7, 0);
        }


        // ==========================================================================
        .burger {
          z-index: 1;
          background: white;
          border-radius: 0.5em;
          position: absolute;
          right: 2em;
          top:2em;
          width:30px;
          height:30px;
          cursor:pointer;
        }

        /* NAV */
        .nav {
          position: absolute;
          top: 0;
          left:0;
          right: 0;
          min-width: 100vw;
          background: hsla(0, 0%, 0%, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          flex-flow: column;
          color: white;
          backdrop-filter: blur(1em);
          transition: 0.5s ease-in;
          transform: translatey(-300px);
          opacity: 0;
        }

        a {
          margin: 0 0 0.3em 1em;
          text-decoration: none;
          font-size: 1.8em;
          color: white;
          cursor:pointer;
          transition:.7s;
          z-index:100;
        }

        .spread {
          transform: translateY(0px);
          opacity: 1;
          min-width: 100%;
        }

        // =========================================

        }
        @media (max-width: 1080px) {
          .menu {
            display: block;
          }
        }
      `}
      </style>
    </div>
  );
};

MenuBurger.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default MenuBurger;
