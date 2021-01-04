import React from 'react';

const AppliedFilters = () => (
  <div className="root">
    <div className="text">Filtros aplicados</div>
    <div className="iconContainer">
      <img className="icon" src="icons/trash.svg" alt="trashIcon" />
    </div>
    <style jsx>
      {`
        .root {
          float: left;
          width: 100%;
          margin-top: 25px;
        }
        .text {
          float: left;
          margin-left: 8px;
        }
        .iconContainer {
          float: right;
          background-color: #ff003e;
          padding: 8px;
          margin-right: 18px;
          border-radius: 5px;
        }
      `}
    </style>
  </div>
);

export default AppliedFilters;
