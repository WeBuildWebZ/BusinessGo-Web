import { useSelector } from 'react-redux';

import useHandleLogout from '../../../../shared/hooks/useHandleLogout';

import { getLanguage } from './lang';

const LogoutButton = () => {
  const handleLogout = useHandleLogout('/login');
  const language = getLanguage(useSelector(store => store.language));

  return (
    <div className="logoutButton" onClick={handleLogout}>
      {language.logout}
      <style jsx>
        {`
          .logoutButton {
            position: absolute;
            transform: translate(-100%, -50%);
            left: calc(100% - 5px);
            top: 50%;
            width: fit-content;
            height: 70%;
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
            transform: translate(-100%, -50%) scale(1.1);
            box-shadow: 0 0 2px 3px skyblue;
            border-radius: 9px;
          }
          @media only screen and (max-width: 768px) {
            .logoutButton {
              font-size: 10px;
              height: 50%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default LogoutButton;
