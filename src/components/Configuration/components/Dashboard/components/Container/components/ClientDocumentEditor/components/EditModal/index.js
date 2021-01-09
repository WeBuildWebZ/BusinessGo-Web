import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal, PopoverTitle } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Text from './components/Text';
import { getLanguage } from './lang';

const EditModal = props => {
  const { clientModel, clientDocument } = props;
  const [newClientDocument, setNewClientDocument] = useState(clientDocument);
  const language = getLanguage(useSelector(store => store.language));

  const { fields } = clientModel;

  const handleUpdateDocument = (key, value) => {
    setNewClientDocument({ ...newClientDocument, [key]: value });
  };

  return (
    <div>
      <Modal show backdrop="static" onHide={props.onClose}>
        <Modal.Header closeButton>
          <PopoverTitle>
            {language.edit}
            &nbsp;
            {clientModel.name}
          </PopoverTitle>
        </Modal.Header>
        <div className="fieldContainer">
          {fields.map((field, i) => {
            switch (field.input_type) {
              case 'text':
                return (
                  <Text
                    field={field}
                    value={newClientDocument[field.key]}
                    onChange={value => handleUpdateDocument(field.key, value)}
                    key={i}
                  />
                );
              default:
                return <div key={i} />;
            }
          })}
        </div>
      </Modal>
      <style jsx>
        {`
          .fieldContainer {
            width: 80%;
            margin-left: 10%;
          }
        `}
      </style>
    </div>
  );
};

EditModal.propTypes = {
  clientModel: PropTypes.object.isRequired,
  clientDocument: PropTypes.object.isRequired,
  onClose: PropTypes.func
};

EditModal.defaultProps = {
  onClose: () => {}
};

export default EditModal;
