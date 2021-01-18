import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { PopoverTitle } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { listFormResponses } from '../../../../../../../../services/api/formResponse';
import InfiniteScroll from '../../../../../../../InfiniteScroll';
import Table from '../../../../../../../Table';
import EditModal from '../ClientDocumentEditor/components/EditModal';

import SearchInput from './components/SearchInput';
import { getLanguage } from './lang';

const FormResponseViewer = props => {
  const language = getLanguage(useSelector(store => store.language));
  const project = useSelector(store => store.project);
  const selectedForm = useSelector(store => store.selectedForm);
  const [loading, setLoading] = useState(true);
  const [formResponses, setFormResponses] = useState([]);
  const [selectedFormResponse, setSelectedFormResponse] = useState(null);
  const [textSearch, setTextSearch] = useState('');

  const importantFields = selectedForm.fields.filter(({ important }) => important);

  const handleTextSearch = text => {
    setTextSearch(text);
  };

  const handleChangePage = pageNumber => {
    setLoading(true);
    listFormResponses(
      project.code,
      selectedForm.code,
      props.pageSize,
      pageNumber,
      {},
      textSearch,
      selectedForm.fields.filter(field => field.important).map(field => field.key)
    ).then(({ data: givenFormResponses }) => {
      const newFormResponses = [...(pageNumber === 1 ? [] : formResponses), ...givenFormResponses];

      setFormResponses(newFormResponses);
      setLoading(false);
    });
  };

  return (
    <InfiniteScroll onPageChange={handleChangePage} data={formResponses} resetPageChanger={textSearch}>
      <div className="formResponseViewer">
        {selectedFormResponse && (
          <EditModal
            fields={selectedForm.fields}
            title={selectedForm.name}
            data={selectedFormResponse}
            readOnly
            action="view"
            onClose={() => setSelectedFormResponse(null)}
            onEdit={() => setSelectedFormResponse(null)}
          />
        )}
        <PopoverTitle>{`${language.responsesForForm} ${selectedForm.name}`}</PopoverTitle>
        <SearchInput onChange={handleTextSearch} />
        <Table
          fields={importantFields}
          onPageChanged={handleChangePage}
          loading={loading}
          rows={formResponses}
          newButton={false}
          viewButton
          editButton={false}
          deleteButton={false}
          onRowView={setSelectedFormResponse}
          onNewRow={() => setSelectedFormResponse(null)}
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
  pageSize: PropTypes.number
};

FormResponseViewer.defaultProps = {
  pageSize: 10
};

export default FormResponseViewer;
