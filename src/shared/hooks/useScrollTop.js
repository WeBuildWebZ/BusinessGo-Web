import { useEffect, useState } from 'react';

const useScrollTop = element => {
  const [scrollTop, setScrollTop] = useState(0);

  if (!element) return 0;

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(element.scrollTop);
    };
    element.addEventListener('scroll', handleScroll);

    return () => element.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollTop;
};

export default useScrollTop;
