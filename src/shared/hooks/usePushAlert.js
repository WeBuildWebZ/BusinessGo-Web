import { useDispatch } from 'react-redux';

import { pushAlert, _hideAlert, _popAlert } from '../actions/alerts';

const usePushAlert = () => {
  const dispatch = useDispatch();

  /** @param {{ type: 'error' | 'info', title: string, message: string }} alert */
  const hook = alert => {
    const pushedAlert = pushAlert(alert);
    dispatch(pushedAlert);
    setTimeout(() => {
      dispatch(_hideAlert(pushedAlert.payload));
      setTimeout(() => {
        dispatch(_popAlert(pushedAlert.payload));
      }, 4000);
    }, pushedAlert.payload.duration);
  };
  return hook;
};

export default usePushAlert;
