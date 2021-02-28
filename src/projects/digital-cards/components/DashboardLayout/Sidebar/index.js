import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setSidebarWidth } from '../../../../../shared/actions/sidebarWidth';

import Button from './Button';
import { getLanguage } from './lang';

const Sidebar = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(sessionStorage.getItem('sidebarOpen') === 'true');
  const language = getLanguage(useSelector(store => store.language));
  const sidebarWidth = open ? 200 : 50;

  dispatch(setSidebarWidth(sidebarWidth));

  const handleToggle = () => {
    setOpen(!open);
    if (open) sessionStorage.removeItem('sidebarOpen');
    else sessionStorage.setItem('sidebarOpen', 'true');
  };

  return (
    <div className={`sidebar${open ? ' sidebarOpen' : ''}`}>
      <img className="favicon" src="/favicon.png" />
      <Button symbol="≡" text={language.options} showText={open} onClick={handleToggle} />
      <Button symbol="❐" text={language.cards} showText={open} onClick={() => {}} />
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
          }
          .sidebarOpen {
            width: ${sidebarWidth}px;
          }
          .favicon {
            margin: 5px;
            width: 40px;
          }
        `}
      </style>
    </div>
  );
};

export default Sidebar;
