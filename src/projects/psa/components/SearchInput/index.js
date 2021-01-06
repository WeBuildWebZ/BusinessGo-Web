import React from 'react';
import PropTypes from 'prop-types';

const timeout = 300;
let timeoutId;

const SearchInput = props => {
  const handleChange = ({ target }) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      props.onChange(target.value);
    }, timeout);
  };

  return (
    <div className="SearchInput">
      <img className="SearchInput-icon" src="icons/search.svg" alt="searchIcon" />
      <div className="SearchInput-inputContainer">
        <input
          type="text"
          className="SearchInput-input SearchInput-inputSmall"
          placeholder="Buscar por nombre o dirección"
          onChange={handleChange}
        />
        <input
          type="text"
          className="SearchInput-input SearchInput-inputLarge"
          placeholder="Buscar por nombre de profesional, taller o dirección"
          onChange={handleChange}
        />
      </div>
      <style jsx>
        {`
          .SearchInput {
            float: left;
            display: inline-table;
            background-color: #eaeaeb;
            width: 400px;
            height: 42px;
            border-radius: 50px;
            transition: 0.2s;
          }

          .SearchInput:hover {
            box-shadow: 0 0 1px 1px #ffffff;
          }

          .SearchInput-icon {
            display: table-cell;
            color: #cccdce;
            float: left;
            margin: 13px 5px 0 13px;
          }

          .SearchInput-inputContainer {
            display: table-cell;
            width: 100%;
            height: 100%;
          }

          .SearchInput-input {
            margin: 0;
            float: left;
            width: 100%;
            height: 100%;
            border-radius: 50px;
            font-size: 15px;
            background-color: transparent;
            border-style: none;
          }

          .SearchInput-inputSmall {
            display: none;
          }

          .SearchInput-input:focus {
            outline: none;
          }
          @media only screen and (max-width: 768px) {
            .SearchInput {
              width: 80%;
            }

            .SearchInput-inputSmall {
              display: block;
            }

            .SearchInput-inputLarge {
              display: none;
            }
          }
        `}
      </style>
    </div>
  );
};

SearchInput.propTypes = {
  onChange: PropTypes.func
};

SearchInput.defaultProps = {
  onChange: () => {}
};

export default SearchInput;
