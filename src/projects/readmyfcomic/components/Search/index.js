import PropTypes from 'prop-types';
import { useState } from 'react';

import useUpdateAfter from '../../../../shared/hooks/useUpdateAfter';

const Search = props => {
  const updateAfter = useUpdateAfter();

  const handleChange = event => {
    updateAfter(event.target.value, props.updateAfter, () => {
      props.onChange(event.target.value);
    });
  };

  return (
    <div className="search" style={props.style}>
      <div className="searchIconContainer">
        <img className="searchIcon" src="/icons/search.png" />
      </div>
      <input className="input" type="text" placeholder={props.placeholder} onKeyPress={handleChange} />
      <style jsx>
        {`
          .search {
            display: flex;
            flex-direction: row;
            height: 20px;
          }
          .searchIconContainer {
            width: 20px;
            height: 100%;
            background-color: #dcb3e1;
            border-style: solid;
            border-width: 1px;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
          }
          .searchIcon {
            width: 100%;
          }
          .input {
            width: calc(100% - 20px);
            height: 100%;
            padding-left: 5px;
            outline: none;
            border-style: solid;
            border-width: 1px;
            border-width: 1px;
            border-color: black;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
          }
        `}
      </style>
    </div>
  );
};

Search.propTypes = {
  placeholder: PropTypes.string,
  style: PropTypes.object,
  onChange: PropTypes.func,
  updateAfter: PropTypes.number
};

Search.defaultProps = {
  placeholder: '',
  style: {},
  onChange: () => {},
  updateAfter: 0
};

export default Search;
