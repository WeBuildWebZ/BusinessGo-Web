import React from 'react';
import { useDispatch } from 'react-redux';

import { clearSelectedOptions } from '../../../../actions/selectedOptions';

const AppliedFilters = () => {
  const dispatch = useDispatch();

  const handleClearFilters = () => {
    dispatch(clearSelectedOptions());
  };

  return (
    <div className="root">
      <div className="text">Filtros aplicados</div>
      <div className="trashIconContainer" onClick={handleClearFilters}>
        <img className="icon" src="icons/trash.svg" alt="trashIcon" />
      </div>
      <style jsx>
        {`
          .root {
            float: left;
            width: 100%;
            margin-left: 18px;
          }
          .text {
            float: left;
          }
          .trashIconContainer {
            float: right;
            background-color: #e44652;
            padding: 8px;
            margin-right: 18px;
            border-radius: 5px;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

export default AppliedFilters;
