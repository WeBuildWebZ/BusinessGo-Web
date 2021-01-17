import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Spinner } from 'react-bootstrap';

import { setSelectedOptions } from '../../actions/selectedOptions';
import { setOptions } from '../../actions/options';

import Select from './components/select';
import Options from './components/options';

const FilterInput = props => {
  let cancel = false;
  const dispatch = useDispatch();
  const project = useSelector(store => store.project);
  const selectedOptions = useSelector(store => store.selectedOptions[props.option]);
  const options = useSelector(store => store.options[props.option]);
  const [open, setOpen] = useState(false);

  const handleClick = e => {
    e.preventDefault();
    if (!cancel) setOpen(!open);
  };

  const handleChangeSelectedOptions = newSelectedOptions => {
    dispatch(setSelectedOptions(props.option, newSelectedOptions));

    if (props.option === 'regions') {
      const cities = project.configuration.basic_info.chile_regions
        .filter(({ value }) => newSelectedOptions.includes(value))
        .map(region => region.related_values.cities.map(city => city.value))
        .flat();

      dispatch(setOptions({ cities }));
    }
  };

  const handleRemoveFilter = e => {
    cancel = true;
    dispatch(setSelectedOptions(props.option, []));
  };

  return (
    <div className="FilterInput" onClick={handleClick}>
      {props.loading && (
        <Spinner
          animation="grow"
          style={{
            width: 20,
            height: 20,
            marginLeft: 5,
            color: '#0cc44a'
          }}
        />
      )}
      <Select
        onClick={handleClick}
        onClickCross={handleRemoveFilter}
        selectedOptions={selectedOptions}
        label={props.label}
      />
      {open && (
        <Options options={options} selectedOptions={selectedOptions} onChange={handleChangeSelectedOptions} />
      )}
      <style jsx>
        {`
          .FilterInput {
            display: inline-block;
            height: 42px;
            margin-right: 8px;
            border-style: solid;
            border-width: 1px;
            border-color: #ffffff;
            border-radius: 50px;
            cursor: pointer;
            transition: 0.2s;
          }

          .FilterInput:hover {
            box-shadow: 0 0 1px 1px #ffffff;
          }

          @media only screen and (max-width: 768px) {
            .FilterInput {
              width: 90%;
              margin-left: 5%;
            }
          }
        `}
      </style>
    </div>
  );
};

FilterInput.propTypes = {
  option: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  loading: PropTypes.bool
};

FilterInput.defaultProps = {
  loading: false
};

export default FilterInput;
