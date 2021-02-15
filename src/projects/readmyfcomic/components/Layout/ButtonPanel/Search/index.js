import { useSelector } from 'react-redux';

import { getLanguage } from './lang';

const Search = () => {
  const language = getLanguage(useSelector(store => store.language));

  return (
    <div className="search">
      <img className="icon" src="/icons/search.png" />
      <input className="input" type="text" placeholder={language.placeholder} />
      <style jsx>
        {`
          .search {
            display: flex;
            flex-direction: row;
          }
          .icon {
            width: 20px;
          }
          .input {
            flex: 1;
            height: calc(100% - 8px);
            margin: 4px 4px 0 4px;
            outline: none;
            border-style: solid;
            border-radius: 5px;
            background-color: #e4e4e4;
          }
        `}
      </style>
    </div>
  );
};

export default Search;
