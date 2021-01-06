import React from 'react';
import { PopoverTitle } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ClientDocumentEditor = props => {
  const { clientModel } = props;

  return (
    <div className="editor">
      <PopoverTitle>{`Editor de ${clientModel.table_descriptive_name}`}</PopoverTitle>
      <style jsx>
        {`
          .editor {
          }
        `}
      </style>
    </div>
  );
};

ClientDocumentEditor.propTypes = {
  clientModel: PropTypes.object.isRequired
};

export default ClientDocumentEditor;
