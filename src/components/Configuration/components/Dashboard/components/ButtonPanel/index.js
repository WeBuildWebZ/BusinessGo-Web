import { useDispatch, useSelector } from 'react-redux';

import { deleteSessions } from '../../../../../../services/api/session';
import logout from '../../../../../../shared/actions/multiple/logout';

import Button from './components/Button';
import { getLanguage } from './lang';

const ButtonPanel = () => {
  const dispatch = useDispatch();
  const language = getLanguage(useSelector(store => store.language));

  const handleLogout = () => {
    deleteSessions().then(() => {
      logout(dispatch);
    });
  };

  return (
    <div className="buttonPanel">
      <Button icon="/shared/icons/logout.png" text={language.logout} onClick={handleLogout} />
      <style jsx>
        {`
          .buttonPanel {
            display: flex;
            flex-direction: column;
            height: 87vh;
          }
        `}
      </style>
    </div>
  );
};

export default ButtonPanel;
