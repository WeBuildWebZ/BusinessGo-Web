import { useDispatch, useSelector } from 'react-redux';

import useHandleError from '../useHandleError';
import usePushAlert from '../usePushAlert';
import { removeToken } from '../../actions/token';
import { resetUser } from '../../actions/user';

import { getLanguage } from './lang';

const useHandleLogout = redirectTo => {
  const handleError = useHandleError();
  const dispatch = useDispatch();
  const pushAlert = usePushAlert();
  const language = getLanguage(useSelector(store => store.language));

  return () => {
    pushAlert(language.alerts.logout);
    dispatch(resetUser());
    dispatch(removeToken());
    if (window.location.pathname !== redirectTo) window.location.href = redirectTo;
  };
};

export default useHandleLogout;
