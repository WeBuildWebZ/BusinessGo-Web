import { useEffect, useState } from 'react';

const useDimensions = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  if (!process.browser) return dimensions;

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return dimensions;
};

export default useDimensions;
