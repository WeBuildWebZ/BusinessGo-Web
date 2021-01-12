import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import { elementScrolledToBottom } from '../utils/html';

const InfiniteScroll = props => {
  const [pageNumber, setPageNumber] = useState(1);
  const [canChangePage, setCanChangePage] = useState(true);

  const handleScroll = e => {
    if (!elementScrolledToBottom(e.target) || !canChangePage) return;
    setPageNumber(pageNumber + 1);
    setCanChangePage(false);
    e.target.scrollBy(0, -3);
    props.onPageChange(pageNumber + 1);
  };

  useEffect(() => {
    setCanChangePage(true);
  }, [props.data]);

  useEffect(() => {
    props.onPageChange(1);
  }, [props.resetPageChanger]);

  return <>{React.cloneElement(props.children, { onScroll: handleScroll })}</>;
};

InfiniteScroll.propTypes = {
  children: PropTypes.element.isRequired,
  data: PropTypes.any.isRequired,
  resetPageChanger: PropTypes.any,
  onPageChange: PropTypes.func
};

InfiniteScroll.defaultProps = {
  onPageChange: () => {},
  resetPageChanger: ''
};

export default InfiniteScroll;
