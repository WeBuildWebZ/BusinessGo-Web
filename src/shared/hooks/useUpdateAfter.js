import { useState } from 'react';

const useUpdateAfter = () => {
  let timeoutId = null;

  return (value, timeout, callback) => {
    if (timeoutId !== null) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      timeoutId = null;
      callback(value);
    }, timeout);
  };
};

export default useUpdateAfter;
