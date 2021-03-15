import { useState } from 'react';

const useUpdateAfter = () => {
  const [timeoutId, setTimeoutId] = useState(null);

  return (value, timeout, callback) =>
    new Promise(resolve => {
      if (timeoutId !== null) clearTimeout(timeoutId);

      setTimeoutId(
        setTimeout(() => {
          setTimeoutId(null);
          callback(value);
        }, timeout)
      );
    });
};

export default useUpdateAfter;
