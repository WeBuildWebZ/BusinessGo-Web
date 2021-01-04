import React from 'react';
import PropTypes from 'prop-types';

import Back from '../Back';

import Title from './components/title';

const FilterView = props => (
  <div className="FilterView">
    <Back onClick={props.onClose} />
    <Title />
    <style jsx>
      {`
        .FilterView {
          position: fixed;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: #202221;
          z-index: 2;
        }
      `}
    </style>
  </div>
);

FilterView.propTypes = {
  onClose: PropTypes.func
};

FilterView.defaultProps = {
  onClose: () => {}
};

export default FilterView;
