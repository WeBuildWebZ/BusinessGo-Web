import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setSelectedClientModel } from '../../../../../../../shared/actions/selectedClientModel';
import { setAdminSection } from '../../../../../../../shared/actions/adminSection';
import Spinner from '../../../../../../Spinner';
import Button from '../../../../../../Button';

import { getLanguage } from './lang';

const TablesSection = () => {
  const dispatch = useDispatch();
  const language = getLanguage(useSelector(store => store.language));
  const clientModels = useSelector(store => store.clientModels);
  const selectedClientModel = useSelector(store => store.selectedClientModel);
  const adminSection = useSelector(store => store.adminSection);

  const handleSelectClientModel = clientModel => {
    dispatch(setAdminSection('tables'));
    dispatch(setSelectedClientModel(clientModel));
  };

  return !clientModels ? (
    <Spinner />
  ) : (
    <>
      {!clientModels.length && language.noTables}
      {clientModels.map((clientModel, i) => (
        <Button
          key={i}
          text={clientModel.name}
          onClick={() => handleSelectClientModel(clientModel)}
          style={{ marginTop: 10 }}
          selected={
            clientModel._id === (selectedClientModel && selectedClientModel._id) && adminSection === 'tables'
          }
        />
      ))}
    </>
  );
};

export default TablesSection;
