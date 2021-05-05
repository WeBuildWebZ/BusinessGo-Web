import PropTypes from 'prop-types';
import { useState } from 'react';

const Pagination = props => {
  const [selectedPage, setSelectedPage] = useState(1);

  const handleChangePage = newPage => {
    if (newPage === selectedPage) return;
    setSelectedPage(newPage);
    props.onChange(newPage);
  };

  return (
    <div className="pagination">
      {Array(props.pageSize)
        .fill(0)
        .map((_, i) => {
          const _page = i + 1;
          const isSelected = _page === selectedPage;

          return (
            <div
              key={i}
              className={`item${isSelected ? ' selected' : ''}`}
              onClick={() => handleChangePage(_page)}
            >
              {_page}
            </div>
          );
        })}
      <style jsx>
        {`
          .pagination {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            width: 50%;
            margin-left: 25%;
          }
          .item {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 14px;
            padding: 7px;
            background-color: #766b7080;
            border-radius: 7px;
            cursor: pointer;
            user-select: none;
            transition: 0.7s;
          }
          .item:hover {
            transform: scale(1.1);
          }
          .item.selected {
            background-color: #523d46aa;
            box-shadow: 0 0 2px 2px #523d46aa;
          }
        `}
      </style>
    </div>
  );
};

Pagination.propTypes = {
  pageSize: PropTypes.number,
  onChange: PropTypes.func
};

Pagination.defaultProps = {
  pageSize: 10,
  onChange: () => {}
};

export default Pagination;
