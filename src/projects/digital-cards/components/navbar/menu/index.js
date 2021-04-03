import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import useHandleLogout from '../../../../../shared/hooks/useHandleLogout';

import * as constants from './constants';

const Menu = () => {
  const user = useSelector(store => store.user);
  const [selectedSection, setSelectedSection] = useState(0);
  const handleLogout = useHandleLogout('/');

  return (
    <div className="menu">
      {constants.sections.map((section, i) => {
        const isSelected = selectedSection === i;

        return (
          <Link key={i} href={section.link}>
            <a onClick={() => setSelectedSection(i)}>
              <div className={`item ${isSelected ? 'selected' : ''}`}>{section.title}</div>
            </a>
          </Link>
        );
      })}

      {!user && (
        <Link href="/login">
          <a>
            <div className="item">Login</div>
          </a>
        </Link>
      )}
      {user && (
        <div className="item" onClick={handleLogout}>
          <a>Logout</a>
        </div>
      )}
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
            transition: 0.7s;
          }
          .item:hover {
            transform: scale(1.1);
          }
          .item:active {
            transform: scale(1.2);
            transition: 0.1s;
          }
          .item.selected {
            background-color: #1c1c1c33;
            animation: itemAppear linear 0.5s;
          }
          @media only screen and (max-width: 768px) {
            .item {
              font-size: 8px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Menu;
