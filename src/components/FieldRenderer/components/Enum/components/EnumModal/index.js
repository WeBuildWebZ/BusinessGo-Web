import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import { Modal, PopoverTitle } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { fieldShape } from '../../../../../../utils/field';

import { getLanguage } from './lang';

const EnumModal = props => {
  const { field, option, FieldRenderer } = props;
  const language = getLanguage(useSelector(store => store.language));
  const [data, setData] = useState(option.value);

  const handleChangeData = newData => {
    props.onChange(newData);
  };

  return (
    <Modal show backdrop="static" onHide={props.onClose}>
      <Modal.Header closeButton>
        <PopoverTitle>{`${language.fieldsFor} ${field.enum_name} ${option.value}`}</PopoverTitle>
      </Modal.Header>
      <Modal.Body>
        <FieldRenderer fields={field.subfields} data={option.related_values} onChange={setData} />
      </Modal.Body>
      <Modal.Footer>
        <Button style={{ backgroundColor: 'lightgreen' }} onClick={() => handleChangeData(data)}>
          {language.save}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

EnumModal.propTypes = {
  field: fieldShape.isRequired,
  option: PropTypes.shape({ related_values: PropTypes.object, value: PropTypes.string }).isRequired,
  FieldRenderer: PropTypes.any.isRequired,
  onClose: PropTypes.func,
  onChange: PropTypes.func
};

EnumModal.defaultProps = {
  onClose: () => {},
  onChange: () => {}
};

export default EnumModal;
