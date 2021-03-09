import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

import { setSidebarWidth } from '../../../../../shared/actions/sidebarWidth';

import Button from './Button';
import { getLanguage } from './lang';

const Sidebar = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(sessionStorage.getItem('sidebarOpen') === 'true');
  const language = getLanguage(useSelector(store => store.language));
  const sidebarWidth = open ? 200 : 50;

  const handleToggle = () => {
    setOpen(!open);
    if (open) sessionStorage.removeItem('sidebarOpen');
    else sessionStorage.setItem('sidebarOpen', 'true');
  };

  const handleRedirect = link => () => {
    window.location.href = link;
  };

  useEffect(() => {
    dispatch(setSidebarWidth(sidebarWidth));
  }, [sidebarWidth]);

  return (
    <div className={`sidebar${open ? ' sidebarOpen' : ''}`}>
      <Link href="/">
        <a>
          <img className="favicon" src="/favicon.png" />
        </a>
      </Link>
      <Button symbol="≡" text={language.options} showText={open} onClick={handleToggle} />
      <Button symbol="❐" text={language.cards} showText={open} onClick={handleRedirect('/dashboard/cards')} />
      <style jsx>
        {`
          .sidebar {
            position: absolute;
            left: 0;
            top: 0;
            width: ${sidebarWidth}px;
            height: 100%;
            border-top-right-radius: 14px;
            background-image: linear-gradient(to top, skyblue, rgb(175, 218, 235));
            transition: 0.7s;
            z-index: 500;
          }
          .sidebarOpen {
            width: ${sidebarWidth}px;
          }
          .favicon {
            margin: 5px;
            width: 40px;
            transition: 0.7s;
          }
          .favicon:hover {
            transform: scale(1.1);
          }
          .favicon:active {
            transform: rotate(5deg) scale(1.2);
            transition: 0.1s;
          }
          @media only screen and (max-width: 768px) {
            .sidebarOpen {
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Sidebar;
