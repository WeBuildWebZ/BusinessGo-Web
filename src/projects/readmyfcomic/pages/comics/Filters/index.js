import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import useChangeQuery from '../../../../../shared/hooks/useChangeQuery';
import Select from '../../../components/Select';
import Search from '../../../components/Search';

import { getLanguage } from './lang';

const categories = [
  'All',
  'Comedy',
  'Action',
  'Drama',
  'Fantasy',
  'Horror',
  'Romance',
  'Sports',
  'Slice of Life'
];

const filters = ['Popular Now', 'Most Viewed', 'Most Liked', 'Oldest', 'Newest'];

const Filters = () => {
  const language = getLanguage(useSelector(store => store.language));
  const query = useSelector(store => store.queryParams);
  const changeQuery = useChangeQuery();
  const [category, setCategory] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setCategory(query.category);
    setSortBy(query.sort_by);
  }, [query]);

  const handleChangeCategory = newCategory => {
    setCategory(newCategory);
    changeQuery({ category: newCategory });
  };

  const handleChangeSortBy = newSortBy => {
    setSortBy(newSortBy);
    changeQuery({ sort_by: newSortBy });
  };

  const handleChangeSearch = newSearch => {
    setSearch(newSearch);
  };

  return (
    <>
      <div className="mobileSearchBar">
        <Search
          placeholder={language.searchByTags}
          style={{ flex: 5, margin: '26px 0 0 7px' }}
          onChange={handleChangeSearch}
          updateAfter={500}
        />
      </div>
      <div className="filters">
        <Select
          title={language.categories}
          options={categories}
          selectedOption={category}
          onOptionChanged={handleChangeCategory}
        />
        <Select
          title={language.filter}
          options={filters}
          selectedOption={sortBy}
          onOptionChanged={handleChangeSortBy}
          style={{ marginLeft: 7 }}
        />
        <div className="searchBar">
          <Search
            placeholder={language.searchByTags}
            style={{ flex: 5, margin: '26px 0 0 7px' }}
            onChange={handleChangeSearch}
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
