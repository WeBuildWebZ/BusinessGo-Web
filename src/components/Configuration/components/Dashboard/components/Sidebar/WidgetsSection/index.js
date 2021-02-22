import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setAdminSection } from '../../../../../../../shared/actions/adminSection';
import Button from '../../../../../../Button';

import { getLanguage } from './lang';

const WidgetsSection = () => {
  const dispatch = useDispatch();
  const language = getLanguage(useSelector(store => store.language));
  const adminSection = useSelector(store => store.adminSection);

  const handleSelect = clientModel => {
    dispatch(setAdminSection('widgets'));
  };

  return (
    <>
      <Button
        text={language.title}
        onClick={handleSelect}
        style={{ marginTop: 10 }}
        selected={adminSection === 'widgets'}
      />
    </>
  );
};

export default WidgetsSection;
