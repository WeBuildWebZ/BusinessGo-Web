import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { PopoverTitle } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Table from '../../../../../../../Table';
import {
  createClientDocument,
  updateClientDocument,
  getClientDocuments,
  deleteClientDocument
} from '../../../../../../../../services/clientDocument';
import { elementScrolledToBottom } from '../../../../../../../../utils/html';

import EditModal from './components/EditModal';
import SearchInput from './components/SearchInput';

const ClientDocumentEditor = props => {
  const { clientModel } = props;
  const user = useSelector(store => store.user);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [clientDocuments, setClientDocuments] = useState([]);
  const [selectedClientDocument, setSelectedClientDocument] = useState(null);
  const [canChangePage, setCanChangePage] = useState(true);
  const [textSearch, setTextSearch] = useState('');
  const [isNewDocument, setIsNewDocument] = useState(false);

  const importantFields = clientModel.fields.filter(({ important }) => important);

  const handleScroll = e => {
    if (!elementScrolledToBottom(e.target) || !canChangePage) return;
    setPageNumber(pageNumber + 1);
    e.target.scrollBy(0, -5);
  };

  const handleChangePage = newPageNumber => {
    setPageNumber(newPageNumber);
  };

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
        setClientDocuments([createdClientDocument, ...clientDocuments]);
      });
    } else {
      updateClientDocument(user, clientDocument).then(() => {
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
    setPageNumber(1);
  };

  useEffect(() => {
    let mounted = true;

    setLoading(true);
    setCanChangePage(false);
    getClientDocuments(
      clientModel.table_name,
      props.pageSize,
      pageNumber,
      {},
      textSearch,
      clientModel.fields.filter(field => field.important).map(field => field.key)
    ).then(({ data: newClientDocuments }) => {
      if (!mounted) return;
      setClientDocuments([...(pageNumber === 1 ? [] : clientDocuments), ...newClientDocuments]);
      setLoading(false);
      setCanChangePage(true);
    });

    return () => {
      mounted = false;
    };
  }, [pageNumber, textSearch]);

  return (
    <div className="editor" onScroll={handleScroll}>
      {selectedClientDocument && (
        <EditModal
          clientModel={clientModel}
          clientDocument={selectedClientDocument}
          onClose={handleStopEditingDocument}
          onEdit={handleSaveDocument}
        />
      )}
      <PopoverTitle>{`Editor de ${clientModel.table_descriptive_name}`}</PopoverTitle>
      <SearchInput onChange={handleTextSearch} />
      <Table
        selectable
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
