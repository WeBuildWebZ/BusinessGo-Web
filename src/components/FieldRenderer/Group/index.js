import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FormLabel, Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';

import { fieldShape } from '../../../utils/field';
import InputGroup from '../../InputGroup';

import FieldModal from './FieldModal';
import { getLanguage } from './lang';

const Group = props => {
  const { field, value, FieldRenderer } = props;
  const language = getLanguage(useSelector(store => store.language));
  const [enumModalOption, setEnumModalOption] = useState(null);
  const [enumModalOptionIndex, setEnumModalOptionIndex] = useState(null);
  const [datas, setDatas] = useState(value);

  const handleAddValue = () => {
    setDatas([...datas, {}]);
  };

  const handleChangeData = (changedIndex, newData) => {
    const newDatas = datas.map((data, i) => (i === changedIndex ? newData : data));

    setDatas(newDatas);
    props.onChange(newDatas);
  };

  return (
    <InputGroup>
      <FormLabel component="legend">{field.name}</FormLabel>
      {datas.map((data, i) => (
        <InputGroup key={i}>
          <CloseIcon style={{ cursor: 'pointer', float: 'right', transform: 'translate(-100%)' }} />
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
