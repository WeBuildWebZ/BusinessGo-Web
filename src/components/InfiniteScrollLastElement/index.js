import { v4 as uuid } from 'uuid';
import { useEffect, useRef, useState, cloneElement } from 'react';
import PropTypes from 'prop-types';

import { isInViewport } from '../../utils/html';

const InfiniteScrollLastElement = props => {
  const [lastElementId] = useState(uuid());
  const [isVisible, setIsVisible] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const isVisibleRef = useRef();
  const pageNumberRef = useRef();
  const lastElementIdRef = useRef();

  pageNumberRef.current = pageNumber;
  isVisibleRef.current = isVisible;
  lastElementIdRef.current = lastElementId;

  useEffect(() => {
    const handleScroll = () => {
      const lastElement = document.getElementById(lastElementIdRef.current);
      const newIsVisible = isInViewport(lastElement);
      if (newIsVisible !== isVisibleRef.current) {
        setIsVisible(newIsVisible);
        if (newIsVisible) {
          const newPageNumber = pageNumberRef.current + 1;

          setPageNumber(newPageNumber);
          props.onPageNumberChange(newPageNumber);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return props.children.map((child, i) => {
    const isLast = i === props.children.length - 1;

    if (!isLast) return child;

    return cloneElement(child, { elementId: lastElementIdRef.current });
  });
};

InfiniteScrollLastElement.propTypes = {
  children: PropTypes.array.isRequired,
  onPageNumberChange: PropTypes.func
};

InfiniteScrollLastElement.defaultProps = {
  onPageNumberChange: () => {}
};

export default InfiniteScrollLastElement;
