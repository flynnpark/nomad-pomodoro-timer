import { useState } from 'react';

function useCounter(limit: number, callback?: () => void) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => {
      const nextCount = (prevCount + 1) % limit;
      if (nextCount === 0) {
        callback?.();
      }
      return nextCount;
    });
  };

  return {
    count,
    increment,
  };
}

export default useCounter;
