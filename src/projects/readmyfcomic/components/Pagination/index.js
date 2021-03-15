import PropTypes from 'prop-types';
import { useState } from 'react';

const Pagination = props => {
  const { pagination } = props;
  const [minPage, setMinPage] = useState(1);
  const totalPages = Math.ceil(pagination.count / pagination.pageSize);
  const morePages = Math.max(0, totalPages - pagination.maxPages);
  const pagesToShow = totalPages - morePages;

  const handleSumPage = amount => {
    const newPage = pagination.pageNumber + amount;
    const newMinPage = Math.max(1, newPage - pagination.maxPages + 1);
    if (newPage > totalPages) return;
    setMinPage(newMinPage);
    props.onPageChanged(newPage);
  };

  return (
    <div className="pagination">
      {pagination.pageNumber > 1 && (
        <div className="button iconButton" onClick={() => handleSumPage(-1)}>
          <img className="icon" src="/icons/arrowLeft.webp" />
        </div>
      )}
      {Array(pagesToShow)
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
      {pagination.pageNumber < totalPages && (
        <div className="button iconButton" onClick={() => handleSumPage(1)}>
          <img className="icon" src="/icons/arrowRight.webp" />
        </div>
      )}
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
          .iconButton:hover {
            background-color: unset;
          }
          .icon {
            width: 20px;
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
