import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { PopoverTitle } from 'react-bootstrap';
import PropTypes from 'prop-types';

import InfiniteScroll from '../../../../../../../InfiniteScroll';
import Table from '../../../../../../../Table';
import {
  getClientDocuments,
  deleteClientDocument
} from '../../../../../../../../services/api/clientDocument';

import SearchInput from './components/SearchInput';
import { getLanguage } from './lang';

const FormResponseViewer = props => {
  const language = getLanguage(useSelector(store => store.language));
  const selectedForm = useSelector(store => store.selectedForm);
  const [loading, setLoading] = useState(true);
  const [clientDocuments, setClientDocuments] = useState([]);
  const [selectedClientDocument, setSelectedClientDocument] = useState(null);
  const [textSearch, setTextSearch] = useState('');
  const [isNewDocument, setIsNewDocument] = useState(false);
  const [mounted, setMounted] = useState(true);

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
      <div className="formResponseViewer">
        <PopoverTitle>{`${language.responsesForForm} ${selectedForm.name}`}</PopoverTitle>
        <SearchInput onChange={handleTextSearch} />
        <Table
          fields={selectedForm.fields}
          onPageChanged={handleChangePage}
          loading={loading}
          rows={clientDocuments}
          onRowDelete={handleDocumentDeletion}
          onRowEdit={handleEditDocument}
          onNewRow={handleCreateDocument}
        />
        <style jsx>
          {`
            .formResponseViewer {
              height: 100%;
              overflow-y: auto;
            }
          `}
        </style>
      </div>
    </InfiniteScroll>
  );
};

FormResponseViewer.propTypes = {
  clientModel: PropTypes.object.isRequired,
  pageSize: PropTypes.number
};

FormResponseViewer.defaultProps = {
  pageSize: 10
};

export default FormResponseViewer;
