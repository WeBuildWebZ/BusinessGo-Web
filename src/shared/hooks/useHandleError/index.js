import { useDispatch, useSelector } from 'react-redux';

import usePushAlert from '../usePushAlert';

import { getLanguage } from './lang';

const useHandleError = (overrideAlerts = {}) => {
  const dispatch = useDispatch();
  const language = getLanguage(useSelector(store => store.language));
  const alerts = { ...language.alerts, ...overrideAlerts };
  const pushAlert = usePushAlert();

  return errorOrResponse => {
    const response = errorOrResponse.response || errorOrResponse;
    let alert;

    if (!response) alert = alerts.request_not_sent;
    else alert = alerts[response.data.error.code];

    pushAlert(alert);
  };
};

export default useHandleError;
