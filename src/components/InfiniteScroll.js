import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';

import { elementScrolledToBottom } from '../utils/html';

const InfiniteScroll = props => {
  const [pageNumber, setPageNumber] = useState(1);
  const [canChangePage, setCanChangePage] = useState(true);
  const [isFirst, setIsFirst] = useState(true);
  const isFirstRef = useRef();

  isFirstRef.current = isFirst;

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
    if (!isFirstRef.current || (isFirstRef.current && props.firstPageChange)) props.onPageChange(1);
  }, [props.resetPageChanger]);

  useEffect(() => {
    setIsFirst(false);
  }, []);

  return <>{React.cloneElement(props.children, { onScroll: handleScroll })}</>;
};

InfiniteScroll.propTypes = {
  children: PropTypes.element.isRequired,
  data: PropTypes.any.isRequired,
  resetPageChanger: PropTypes.any,
  onPageChange: PropTypes.func,
  firstPageChange: PropTypes.bool
};

InfiniteScroll.defaultProps = {
  onPageChange: () => {},
  resetPageChanger: '',
  firstPageChange: true
};

export default InfiniteScroll;
