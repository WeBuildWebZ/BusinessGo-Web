import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setSelectedClientModel } from '../../../../../../../../actions/selectedClientModel';
import Spinner from '../../../../../../../Spinner';
import Button from '../../../../../../../Button';

const TablesSection = () => {
  const dispatch = useDispatch();
  const clientModels = useSelector(store => store.clientModels);
  const selectedClientModel = useSelector(store => store.selectedClientModel);
  const isLoading = !clientModels.length;

  const handleSelectClientModel = clientModel => {
    dispatch(setSelectedClientModel(clientModel));
  };

  return isLoading ? (
    <Spinner />
  ) : (
    clientModels.map((clientModel, i) => (
      <Button
        key={i}
        text={clientModel.table_descriptive_name}
        onClick={() => handleSelectClientModel(clientModel)}
        selected={clientModel._id === (selectedClientModel && selectedClientModel._id)}
      />
    ))
  );
};

export default TablesSection;
