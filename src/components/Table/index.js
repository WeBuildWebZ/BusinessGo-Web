import React from 'react';
import PropTypes from 'prop-types';

import Split from '../Split';

const Table = props => {
  const { selectable, fields } = props;

  return (
    <div className="table">
      <div className="header">
        {fields.map((field, i) => (
          <div className="headerItem" key={i}>
            {field.name}
          </div>
        ))}
      </div>
      <Split style={{ float: 'unset' }} />
      <style jsx>
        {`
          .table {
            border-radius: 5px;
            box-shadow: 0 0 3px 3px gray;
          }

          .header {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
          }

          .headerItem {
            font-size: 14px;
            padding: 8px 0 0 0;
          }
        `}
      </style>
    </div>
  );
};

Table.propTypes = {
  selectable: PropTypes.bool,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired
};

Table.defaultProps = {
  selectable: false
};

export default Table;
