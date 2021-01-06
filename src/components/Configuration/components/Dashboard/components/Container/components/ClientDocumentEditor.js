import React from 'react';
import { PopoverTitle } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Table from '../../../../../../Table';

const ClientDocumentEditor = props => {
  const { clientModel } = props;

  const importantFields = clientModel.fields.filter(({ important }) => important);

  return (
    <div className="editor">
      <PopoverTitle>{`Editor de ${clientModel.table_descriptive_name}`}</PopoverTitle>
      <Table selectable fields={importantFields} />
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
