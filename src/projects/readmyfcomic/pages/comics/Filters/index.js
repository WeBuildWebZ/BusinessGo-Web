import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import useChangeQuery from '../../../../../shared/hooks/useChangeQuery';
import Select from '../../../components/Select';

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
  const [search, setSearch] = useState(null);

  useEffect(() => {
    setCategory(query.category);
    setSortBy(query.sort_by);
    setSearch(query.search);
  }, [query]);

  const handleChangeCategory = newCategory => {
    setCategory(newCategory);
    changeQuery({ category: newCategory });
  };

  const handleChangeSortBy = newSortBy => {
    setSortBy(newSortBy);
    changeQuery({ sort_by: newSortBy });
  };

  return (
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
      />
      <style jsx>
        {`
          .filters {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
          }
        `}
      </style>
    </div>
  );
};

export default Filters;
