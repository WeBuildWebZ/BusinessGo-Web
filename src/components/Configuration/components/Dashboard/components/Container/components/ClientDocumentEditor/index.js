import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { PopoverTitle } from 'react-bootstrap';
import PropTypes from 'prop-types';

import InfiniteScroll from '../../../../../../../InfiniteScroll';
import Table from '../../../../../../../Table';
import {
  createClientDocument,
  updateClientDocument,
  getClientDocuments,
  deleteClientDocument
} from '../../../../../../../../services/api/clientDocument';

import EditModal from './components/EditModal';
import SearchInput from './components/SearchInput';

const ClientDocumentEditor = props => {
  const { clientModel } = props;
  const user = useSelector(store => store.user);
  const [loading, setLoading] = useState(true);
  const [clientDocuments, setClientDocuments] = useState([]);
  const [selectedClientDocument, setSelectedClientDocument] = useState(null);
  const [textSearch, setTextSearch] = useState('');
  const [isNewDocument, setIsNewDocument] = useState(false);
  const [mounted, setMounted] = useState(true);

  const importantFields = clientModel.fields.filter(({ important }) => important);

  useEffect(
    () => () => {
      setMounted(false);
    },
    []
  );

  const handleEditDocument = clientDocument => {
    setIsNewDocument(false);
    setSelectedClientDocument(clientDocument);
  };

  const handleCreateDocument = clientDocument => {
    setIsNewDocument(true);
    setSelectedClientDocument(clientDocument);
  };

  const handleStopEditingDocument = () => {
    setSelectedClientDocument(null);
  };

  const handleSaveDocument = clientDocument => {
    setSelectedClientDocument(null);

    if (isNewDocument) {
      createClientDocument(user, clientModel, clientDocument).then(({ data: createdClientDocument }) => {
        if (!mounted) return;
        setClientDocuments([createdClientDocument, ...clientDocuments]);
      });
    } else {
      updateClientDocument(user, clientDocument).then(() => {
        if (!mounted) return;
        setClientDocuments(
          clientDocuments.map(_clientDocument =>
            _clientDocument._id === clientDocument._id ? clientDocument : _clientDocument
          )
        );
      });
    }
  };

  const handleDocumentDeletion = clientDocument => {
    deleteClientDocument(user, clientDocument).then(() => {
      setClientDocuments(
        clientDocuments.filter(_clientDocument => _clientDocument._id !== clientDocument._id)
      );
    });
  };

  const handleTextSearch = text => {
    setTextSearch(text);
  };

  const handleChangePage = pageNumber => {
    setLoading(true);
    getClientDocuments(
      clientModel.table_name,
      props.pageSize,
      pageNumber,
      {},
      textSearch,
      clientModel.fields.filter(field => field.important).map(field => field.key)
    ).then(({ data: newClientDocuments }) => {
      setClientDocuments([...(pageNumber === 1 ? [] : clientDocuments), ...newClientDocuments]);
      setLoading(false);
    });
  };

  return (
    <InfiniteScroll onPageChange={handleChangePage} data={clientDocuments} resetPageChanger={textSearch}>
      <div className="editor">
        {selectedClientDocument && (
          <EditModal
            clientModel={clientModel}
            clientDocument={selectedClientDocument}
            onClose={handleStopEditingDocument}
            onEdit={handleSaveDocument}
            action={isNewDocument ? 'create' : 'edit'}
          />
        )}
        <PopoverTitle>{`Editor de ${clientModel.table_descriptive_name}`}</PopoverTitle>
        <SearchInput onChange={handleTextSearch} />
        <Table
          fields={importantFields}
          onPageChanged={handleChangePage}
          loading={loading}
          rows={clientDocuments}
          onRowDelete={handleDocumentDeletion}
          onRowEdit={handleEditDocument}
          onNewRow={handleCreateDocument}
        />
        <style jsx>
          {`
            .editor {
              height: 100%;
              overflow-y: auto;
            }
          `}
        </style>
      </div>
    </InfiniteScroll>
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
