import { useDispatch } from 'react-redux';

import { updateLanguage } from '../../../services/api/language';
import { setLanguage } from '../../actions/language';

const useChangeLanguage = () => {
  const dispatch = useDispatch();

  return (newLanguage, saveOnBackend) => {
    dispatch(setLanguage(newLanguage));
    if (saveOnBackend) updateLanguage(newLanguage);
  };
};

export default useChangeLanguage;
