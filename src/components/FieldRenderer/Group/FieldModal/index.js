import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import { Modal, PopoverTitle } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { fieldShape } from '../../../../utils/field';

import { getLanguage } from './lang';

const FieldModal = props => {
  const { field, data: givenData, FieldRenderer } = props;
  const language = getLanguage(useSelector(store => store.language));
  const [data, setData] = useState(givenData);

  const handleChangeData = newData => {
    props.onChange(newData);
  };

  return (
    <Modal show backdrop="static" onHide={props.onClose}>
      <Modal.Header closeButton>
        <PopoverTitle>{`${language.fieldsFor} ${field.enum_name}`}</PopoverTitle>
      </Modal.Header>
      <Modal.Body>
        <FieldRenderer fields={field.subfields} data={data} onChange={setData} />
      </Modal.Body>
      <Modal.Footer>
        <Button style={{ backgroundColor: 'lightgreen' }} onClick={() => handleChangeData(data)}>
          {language.save}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

FieldModal.propTypes = {
  field: fieldShape.isRequired,
  data: PropTypes.object.isRequired,
  FieldRenderer: PropTypes.any.isRequired,
  onClose: PropTypes.func,
  onChange: PropTypes.func
};

FieldModal.defaultProps = {
  onClose: () => {},
  onChange: () => {}
};

export default FieldModal;
