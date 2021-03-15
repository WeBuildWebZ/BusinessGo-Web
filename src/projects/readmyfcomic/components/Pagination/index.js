import PropTypes from 'prop-types';
import { useState } from 'react';

const Pagination = props => {
  const { pagination } = props;
  const [minPage, setMinPage] = useState(1);
  const pages = Math.ceil(pagination.count / pagination.pageSize);

  return (
    <div className="pagination">
      {Array(pages)
        .fill(0)
        .map((_, i) => {
          const currentPage = minPage + i;
          const isSelected = currentPage === pagination.pageNumber;

          return (
            <div
              key={i}
              className={`button${isSelected ? ' selected' : ''}`}
              onClick={() => props.onPageChanged(currentPage)}
            >
              {minPage + i}
            </div>
          );
        })}
      <style jsx>
        {`
          .pagination {
            display: flex;
            flex-direction: row;
            justify-content: center;
            margin-top: 30px;
          }
          .button {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin: 4px;
            width: 35px;
            height: 35px;
            border-radius: 50px;
            text-align: center;
            user-select: none;
            cursor: pointer;
            transition: 0.7s;
          }
          .button:hover {
            background-color: #8dd4e47a;
          }
          .button.selected {
            background-color: #8dd4e4;
          }
        `}
      </style>
    </div>
  );
};

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChanged: PropTypes.func
};

Pagination.defaultProps = {
  onPageChanged: () => {}
};

export default Pagination;
