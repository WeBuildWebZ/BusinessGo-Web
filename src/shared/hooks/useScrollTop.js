import { useEffect, useState } from 'react';

const useScrollTop = () => {
  const [scrollTop, setScrollTop] = useState(0);

  if (typeof window !== 'object') return 0;

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollTop;
};

export default useScrollTop;
