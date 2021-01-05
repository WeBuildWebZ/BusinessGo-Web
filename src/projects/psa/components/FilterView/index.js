import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Back from '../Back';
import FilterInput from '../FilterInput';
import SelectedOptionList from '../SelectedOptionList';
import Split from '../../../../components/Split';

import Title from './components/title';
import AppliedFilters from './components/appliedFilters';

const FilterView = props => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  });

  return (
    <div className="FilterView">
      <Back onClick={props.onClose} style={{ margin: '12px 0 0 15px' }} />
      <Title />
      <AppliedFilters />
      <SelectedOptionList />
      <Split />
      <FilterInput label="Región" option="regions" />
      <FilterInput label="Ciudad" option="cities" />
      <FilterInput label="Área de trabajo" option="workAreas" />
      <style jsx>
        {`
          .FilterView {
            position: fixed;
            display: flex;
            flex-wrap: wrap;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: #202221;
            z-index: 2;
            overflow-y: auto;
          }
        `}
      </style>
    </div>
  );
};

FilterView.propTypes = {
  onClose: PropTypes.func
};

FilterView.defaultProps = {
  onClose: () => {}
};

export default FilterView;
