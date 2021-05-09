import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useChangeQuery from '../../../../shared/hooks/useChangeQuery';
import Select from '../Select';
import Search from '../Search';
import { setForums } from '../../actions/forums';
import { setForumPagination } from '../../actions/forumPagination';
import { listItems } from '../../../../services/api/item';
import { getWordsFromString } from '../../../../utils/string';

import { getLanguage } from './lang';

const filters = ['Hot', 'All Time Popular', 'Newest', 'Oldest'];
const pageSize = 8;

const ForumFilters = () => {
  const dispatch = useDispatch();
  const project = useSelector(store => store.project);
  const pagination = useSelector(store => store.profilePagination);
  const language = getLanguage(useSelector(store => store.language));
  const [sortBy, setSortBy] = useState(filters[0]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const { pageNumber } = pagination;
    if (!project) return;
    const tags = getWordsFromString(search);
    const completeFilter = { tags };

    listItems('forum', project, pageSize, pageNumber, completeFilter).then(({ data: comics }) => {
      dispatch(setForums(comics));
    });
    listItems('forum', project, pageSize, pageNumber, completeFilter, '', [], true).then(({ data }) => {
      dispatch(setForumPagination({ count: data.count, pageSize, maxPages: 2, pageNumber }));
    });
  }, [project, sortBy, search, pagination?.pageNumber]);

  return (
    <>
      <div className="mobileSearchBar">
        <Search
          placeholder={language.searchByTags}
          style={{ flex: 5, margin: '26px 0 0 7px' }}
          onChange={newSearch => setSearch(newSearch)}
          updateAfter={500}
        />
      </div>
      <div className="filters">
        <Select
          options={filters}
          selectedOption={sortBy}
          onOptionChanged={newSortBy => setSortBy(newSortBy)}
          style={{ marginLeft: 7 }}
        />
        <div className="searchBar">
          <Search
            placeholder={language.searchByTags}
            style={{ flex: 5, margin: '0 0 0 7px' }}
            onChange={newSearch => setSearch(newSearch)}
            updateAfter={500}
          />
        </div>
      </div>
      <style jsx>
        {`
          .filters {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
          }
          .searchBar {
            flex: 5;
          }
          .mobileSearchBar {
            display: none;
          }
          @media only screen and (max-width: 768px) {
            .searchBar {
              display: none;
            }
            .mobileSearchBar {
              display: block;
            }
          }
        `}
      </style>
    </>
  );
};

export default ForumFilters;
