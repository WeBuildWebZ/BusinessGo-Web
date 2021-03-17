import Link from 'next/link';
import { useState } from 'react';
import PropTypes from 'prop-types';

const MenuBurger = props => {
  const [spread, setSpread] = useState(false);

  const handleToggle = () => {
    setSpread(!spread);
  };

  return (
    <div className="menu">
      <div className="card">
        <span className="top-icons">
          <svg
            className="burger"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            onClick={handleToggle}
          >
            <path d="M4 6H20V8H4zM8 11H20V13H8zM13 16H20V18H13z" />
          </svg>
        </span>

        <nav className={`nav${spread ? ' spread' : ''}`}>
          {props.links.map((link, i) => (
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
          padding: 0.5em;
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
        }
        /* NAV */
        .nav {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 200px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-flow: column;
          background:#bac8e0;
          transition: 0.5s ease-in;
          transform: translatey(-300px);
          opacity: 0;
        }

        a {
          margin: 0 0 0.3em 1em;
          text-decoration: none;
          font-size: 1.5em;
          color: white;
        }

        .spread {
          transform: translateY(10px);
          opacity: 1;
        }

        // =========================================

        }
        @media (max-width: 790px) {
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
