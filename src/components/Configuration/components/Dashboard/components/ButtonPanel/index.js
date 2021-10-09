import { useDispatch, useSelector } from 'react-redux';

import { setLanguage } from '../../../../../../shared/actions/language';
import logout from '../../../../../../shared/actions/multiple/logout';
import useChangeLanguage from '../../../../../../shared/hooks/useChangeLanguage';
import { LANGUAGES } from '../../../../../LanguageSelector/constants';

import Button from './Button';
import { getLanguage } from './lang';

const ButtonPanel = () => {
  const dispatch = useDispatch();
  const changeLanguage = useChangeLanguage();
  const languageCode = useSelector(store => store.language);
  const language = getLanguage(languageCode);

  const handleLogout = () => {
    logout(dispatch);
  };

  const handleChangeLanguage = () => {
    const nextIndex = LANGUAGES.indexOf(languageCode) + 1;
    const newIndex = nextIndex >= LANGUAGES.length ? 0 : nextIndex;
    changeLanguage(LANGUAGES[newIndex]);
  };

  return (
    <div className="buttonPanel">
      <Button icon="/shared/icons/logout.png" text={language.logout} onClick={handleLogout} />
      <Button
        icon="/shared/icons/language.png"
        text={language.changeLanguage}
        onClick={handleChangeLanguage}
      />
      <style jsx>
        {`
          .buttonPanel {
            display: flex;
            justify-content: center;
            width: 100%;
            animation: arrive 1s linear;
            margin: 2em 0 0 0;
            background: #ebebeb;
          }

          @keyframes arrive {
            0% {
              opacity: 0;
              -ms-transform: translate(500%, 200%);
              -moz-transform: translate(500%, 200%);
              -webkit-transform: translate(500%, 200%);
              -o-transform: translate(500%, 200%);
              transform: translate(500%, 200%);
            }
            100% {
              opacity: 1;
              -ms-transform: translate(0, 0);
              -moz-transform: translate(0, 0);
              -webkit-transform: translate(0, 0);
              -o-transform: translate(0, 0);
              transform: translate(0, 0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default ButtonPanel;
