import { useEffect, useRef, useState } from 'react';

import { INTERVAL_IN_MILISECONDS } from '../constants';

function useCountdown(initialCountdown: number) {
  const [time, setTime] = useState(initialCountdown);
  const [referenceTime, setReferenceTime] = useState(Date.now());
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef<number>();

  useEffect(() => {
    const countDownUntilZero = () => {
      setTime((prevTime) => {
        if (prevTime <= 0) {
          return 0;
        }

        const now = Date.now();
        const interval = now - referenceTime;
        setReferenceTime(now);
        return prevTime - interval;
      });
    };

    if (isRunning) {
      timerRef.current = setTimeout(countDownUntilZero, INTERVAL_IN_MILISECONDS);
    }

    return () => clearTimeout(timerRef.current);
  }, [isRunning, referenceTime, time]);

  const toggleRunning = () => {
    if (isRunning) {
      setIsRunning(false);
      clearTimeout(timerRef.current);
    } else {
      setIsRunning(true);
      setReferenceTime(Date.now());
    }
  };

  return { time, toggleRunning };
}

export default useCountdown;
