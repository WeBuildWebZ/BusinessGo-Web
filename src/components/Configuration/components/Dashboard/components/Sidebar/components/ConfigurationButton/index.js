import { useDispatch, useSelector } from 'react-redux';

import Button from '../../../../../../../Button';
import { setAdminSection } from '../../../../../../../../actions/adminSection';
import { setSelectedClientModel } from '../../../../../../../../actions/selectedClientModel';

import { getLanguage } from './lang';

const Configuration = () => {
  const dispatch = useDispatch();
  const language = getLanguage(useSelector(store => store.language));
  const adminSection = useSelector(store => store.adminSection);
  const isSelected = adminSection === 'configuration';

  const handleSelectSection = () => {
    dispatch(setAdminSection('configuration'));
    dispatch(setSelectedClientModel(null));
  };

  return (
    <Button
      style={{ marginTop: 10 }}
      text={language.configuration}
      onClick={handleSelectSection}
      selected={isSelected}
    />
  );
};

export default Configuration;
