import Link from 'next/link';

import * as constants from './constants';

const getIsSelected = path => typeof window === 'object' && window.location.pathname === path;

const Menu = () => (
  <div className="menu">
    {constants.sections.map((section, i) => {
      const isSelected = getIsSelected(section.link);

      return (
        <Link key={i} href={section.link}>
          <a>
            <div className={`item ${isSelected ? 'selected' : ''}`}>{section.title}</div>
          </a>
        </Link>
      );
    })}

    {/* <Link href="/precio">
      <a>Precio</a>
    </Link> */}

    <style jsx>
      {`
        .menu {
          width: 100%;
          height: 100%;
          flex: 8;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
        }
        a {
          text-decoration: none;
          font-weight: 500;
          color: #1c1c1c;
        }
        h4 {
          margin: 0 0.5em;
        }
        .item {
          padding: 4px;
          border-radius: 5px;
          font-size: 16px;
        }
        .item.selected {
          background-color: #1c1c1c33;
          animation: itemAppear linear 0.5s;
        }
        @keyframes itemAppear {
          0% {
            font-size: 26px;
          }
        }
      `}
    </style>
  </div>
);

export default Menu;
