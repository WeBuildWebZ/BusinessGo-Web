import { useSelector } from 'react-redux';

import useHandleLogout from '../../../../../../shared/hooks/useHandleLogout';

import { getLanguage } from './lang';

const LogoutButton = () => {
  const handleLogout = useHandleLogout('/');
  const language = getLanguage(useSelector(store => store.language));

  return (
    <div className="logoutButton" onClick={handleLogout}>
      {language.logout}
      <style jsx>
        {`
          .logoutButton {
            height: 100%;
            padding: 5px;
            text-align: center;
            background-color: skyblue;
            border-radius: 4px;
            user-select: none;
            cursor: pointer;
            transition: 0.7s;
          }
          .logoutButton:hover {
            box-shadow: 0 0 2px 2px skyblue;
            border-radius: 7px;
          }
          .logoutButton:active {
            transform: scale(1.1);
            box-shadow: 0 0 2px 3px skyblue;
            border-radius: 9px;
          }
        `}
      </style>
    </div>
  );
};

export default LogoutButton;
