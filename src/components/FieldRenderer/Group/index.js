import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FormLabel, Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

import { fieldShape } from '../../../utils/field';
import InputGroup from '../../InputGroup';
import ConfirmModal from '../../ConfirmModal';
import { getFieldKeyTranslation } from '../../../translations/fieldKeys';

import { getLanguage } from './lang';

const Group = props => {
  const { field, value, FieldRenderer } = props;
  const languageCode = useSelector(store => store.language);
  const keyTranslation = getFieldKeyTranslation(languageCode);
  const language = getLanguage(languageCode);
  const [enumModalOption, setEnumModalOption] = useState(null);
  const [enumModalOptionIndex, setEnumModalOptionIndex] = useState(null);
  const [datas, setDatas] = useState(value);
  const [deletingIndex, setDeletingIndex] = useState(null);

  const handleAddValue = () => {
    setDatas([...datas, { _id: uuid() }]);
  };

  const handleRemoveData = index => {
    const newDatas = datas.filter((data, i) => i !== index);
    setDatas(newDatas);
    props.onChange(newDatas);
  };

  const handleChangeData = (changedIndex, newData) => {
    const newDatas = datas.map((data, i) => (i === changedIndex ? { ...data, ...newData } : data));

    setDatas(newDatas);
    props.onChange(newDatas);
  };

  const handlePrompt = confirmed => {
    if (confirmed) handleRemoveData(deletingIndex);
    setDeletingIndex(null);
  };

  return (
    <InputGroup>
      <ConfirmModal
        show={deletingIndex !== null}
        onPrompt={handlePrompt}
        title={language.deleteMessage(field)}
      />
      <FormLabel component="legend">
        {(field.names && field.names[languageCode]) || field.name || keyTranslation[field.key]}
      </FormLabel>
      {datas.map((data, i) => (
        <InputGroup key={i}>
          <CloseIcon
            onClick={() => setDeletingIndex(i)}
            style={{
              cursor: 'pointer',
              float: 'right',
              transform: 'translate(-100%)',
              borderStyle: 'solid',
              borderWidth: 1,
              borderRadius: 5
            }}
          />
          <FieldRenderer
            fields={field.subfields}
            data={data}
            onChange={newData => handleChangeData(i, newData)}
          />
        </InputGroup>
      ))}
      {!props.readOnly && (
        <Button onClick={handleAddValue} style={{ marginTop: 8 }}>
          {language.add} {field.enum_name}
        </Button>
      )}
    </InputGroup>
  );
};

Group.propTypes = {
  value: PropTypes.arrayOf(PropTypes.object),
  field: fieldShape.isRequired,
  readOnly: PropTypes.bool,
  FieldRenderer: PropTypes.any.isRequired,
  onChange: PropTypes.func
};

Group.defaultProps = {
  value: [],
  readOnly: false,
  onChange: () => {}
};

export default Group;
