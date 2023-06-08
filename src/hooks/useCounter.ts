import { useState } from 'react';

function useCounter(limit: number, callback?: () => void) {
  const [count, setCount] = useState(0);

  const increment = () => {
    const nextCount = (count + 1) % limit;
    setCount(nextCount);
    if (nextCount === 0) {
      callback?.();
    }
  };

  return {
    count,
    increment,
  };
}

export default useCounter;
