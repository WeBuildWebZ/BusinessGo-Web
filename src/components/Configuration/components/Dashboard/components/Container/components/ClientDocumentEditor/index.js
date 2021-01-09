import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { PopoverTitle } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Table from '../../../../../../../Table';
import { getClientDocuments, deleteClientDocument } from '../../../../../../../../services/clientDocument';

import EditModal from './components/EditModal';

const ClientDocumentEditor = props => {
  const { clientModel } = props;
  const user = useSelector(store => store.user);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [clientDocuments, setClientDocuments] = useState([]);
  const [selectedClientDocument, setSelectedClientDocument] = useState(null);

  const importantFields = clientModel.fields.filter(({ important }) => important);

  const handleChangePage = newPageNumber => {
    setPageNumber(newPageNumber);
  };

  const handleEditDocument = clientDocument => {
    setSelectedClientDocument(clientDocument);
  };

  const handleStopEdittingDocument = () => {
    setSelectedClientDocument(null);
  };

  useEffect(() => {
    let mounted = true;

    getClientDocuments(clientModel.table_name, props.pageSize, pageNumber).then(
      ({ data: newClientDocuments }) => {
        if (!mounted) return;
        setClientDocuments(newClientDocuments);
        setLoading(false);
      }
    );

    return () => {
      mounted = false;
    };
  }, [pageNumber]);

  const handleDocumentDeletion = clientDocument => {
    deleteClientDocument(user, clientDocument).then(() => {
      setClientDocuments(
        clientDocuments.filter(_clientDocument => _clientDocument._id !== clientDocument._id)
      );
    });
  };

  return (
    <div className="editor">
      {selectedClientDocument && (
        <EditModal
          clientModel={clientModel}
          clientDocument={selectedClientDocument}
          onClose={handleStopEdittingDocument}
        />
      )}
      <PopoverTitle>{`Editor de ${clientModel.table_descriptive_name}`}</PopoverTitle>
      <Table
        selectable
        fields={importantFields}
        onPageChanged={handleChangePage}
        loading={loading}
        rows={clientDocuments}
        onRowDelete={handleDocumentDeletion}
        onRowEdit={handleEditDocument}
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
