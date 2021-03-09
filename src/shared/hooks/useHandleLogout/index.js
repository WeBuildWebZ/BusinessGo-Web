import { useDispatch, useSelector } from 'react-redux';

import useHandleError from '../useHandleError';
import { deleteSessions } from '../../../services/api/session';
import usePushAlert from '../usePushAlert';
import { resetUser } from '../../actions/user';

import { getLanguage } from './lang';

const useHandleLogout = redirectTo => {
  const handleError = useHandleError();
  const dispatch = useDispatch();
  const pushAlert = usePushAlert();
  const language = getLanguage(useSelector(store => store.language));

  return () => {
    deleteSessions()
      .then(() => {
        pushAlert(language.alerts.logout);
        dispatch(resetUser());
        if (window.location.pathname !== redirectTo) window.location.href = redirectTo;
      })
      .catch(handleError);
  };
};

export default useHandleLogout;
