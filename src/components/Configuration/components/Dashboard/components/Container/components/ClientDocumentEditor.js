import React, { useEffect, useState } from 'react';
import { PopoverTitle } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Table from '../../../../../../Table';
import { getClientDocuments } from '../../../../../../../services/clientDocument';

const ClientDocumentEditor = props => {
  const { clientModel } = props;
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [clientDocuments, setClientDocuments] = useState([]);

  const importantFields = clientModel.fields.filter(({ important }) => important);

  const handleChangePage = newPageNumber => {
    setPageNumber(newPageNumber);
  };

  useEffect(() => {
    let mounted = true;

    getClientDocuments(clientModel.table_name, props.pageSize, pageNumber).then(newClientDocuments => {
      if (!mounted) return;
      setClientDocuments(newClientDocuments);
      setLoading(false);
    });

    return () => {
      mounted = false;
    };
  }, [pageNumber]);

  return (
    <div className="editor">
      <PopoverTitle>{`Editor de ${clientModel.table_descriptive_name}`}</PopoverTitle>
      <Table
        selectable
        fields={importantFields}
        onPageChanged={handleChangePage}
        loading={loading}
        rows={clientDocuments}
      />
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
  clientModel: PropTypes.object.isRequired,
  pageSize: PropTypes.number
};

ClientDocumentEditor.defaultProps = {
  pageSize: 10
};

export default ClientDocumentEditor;
