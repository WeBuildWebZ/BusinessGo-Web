import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useChangeQuery from '../../../../shared/hooks/useChangeQuery';
import Select from '../Select';
import Search from '../Search';
import { setProfiles } from '../../actions/profiles';
import { setProfilePagination } from '../../actions/profilePagination';
import { listItems } from '../../../../services/api/item';

import { getLanguage } from './lang';

const filters = ['Rated', 'Viewed', 'Oldest', 'Newest'];
const pageSize = 8;

const Filters = () => {
  const dispatch = useDispatch();
  const project = useSelector(store => store.project);
  const pagination = useSelector(store => store.profilePagination);
  const language = getLanguage(useSelector(store => store.language));
  const [sortBy, setSortBy] = useState(filters[0]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const pageNumber = pagination?.pageNumber || 1;
    if (!project) return;

    listItems('user', project, pageSize, pageNumber, {
      text_search: search,
      text_search_fields: ['name+surname']
    }).then(({ data: profiles }) => {
      dispatch(setProfiles(profiles));
    });
  }, [project, sortBy, search, pagination?.pageNumber]);

  useEffect(() => {
    const pageNumber = pagination?.pageNumber || 1;
    if (!project) return;

    listItems('user', project, pageSize, pageNumber, {
      text_search: search,
      text_search_fields: ['name+surname'],
      count: true
    }).then(({ data }) => {
      dispatch(setProfilePagination({ count: data.count, pageSize, maxPages: 2, pageNumber }));
    });
  }, [project, sortBy, search]);

  return (
    <>
      <div className="mobileSearchBar">
        <Search
          placeholder={language.searchByName}
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
            placeholder={language.searchByName}
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

export default Filters;
