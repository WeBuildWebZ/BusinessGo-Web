import React, { useEffect, useRef, useState } from 'react';
import { PopoverTitle } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

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
  const project = useSelector(store => store.project);
  const [loading, setLoading] = useState(true);
  const [clientDocuments, setClientDocuments] = useState([]);
  const [selectedClientDocument, setSelectedClientDocument] = useState(null);
  const [textSearch, setTextSearch] = useState('');
  const [isNewDocument, setIsNewDocument] = useState(false);
  const [mounted, setMounted] = useState(true);
  const clientModelRef = useRef();

  clientModelRef.current = clientModel;

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
      createClientDocument(clientModel.entity, clientModel.project_code, clientDocument).then(
        ({ data: createdClientDocument }) => {
          if (!mounted) return;
          setClientDocuments([createdClientDocument, ...clientDocuments]);
        }
      );
    } else {
      updateClientDocument(clientDocument).then(() => {
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
    deleteClientDocument(clientDocument).then(() => {
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
      clientModel.entity,
      project,
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

  useEffect(() => {
    setClientDocuments([]);
    handleChangePage(1);
  }, [clientModel]);

  return (
    <InfiniteScroll
      onPageChange={handleChangePage}
      data={clientDocuments}
      resetPageChanger={textSearch}
      firstPageChange={false}
    >
      <div className="editor">
        {selectedClientDocument && (
          <EditModal
            title={clientModel.name}
            fields={clientModel.fields}
            data={selectedClientDocument}
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
          viewButton={false}
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
