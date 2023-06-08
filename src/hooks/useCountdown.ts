import { useEffect, useRef, useState } from 'react';

import { INTERVAL_IN_MILLISECONDS } from '../constants';

function useCountdown(initialCountdown: number, finishCallback?: () => void | undefined) {
  const [time, setTime] = useState(initialCountdown);
  const [referenceTime, setReferenceTime] = useState(Date.now());
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef<number>();

  useEffect(() => {
    const countDownUntilZero = () => {
      setTime((prevTime) => {
        const now = Date.now();
        const interval = now - referenceTime;
        const nextTime = prevTime - interval;
        setReferenceTime(now);

        if (nextTime <= 0) {
          setIsRunning(false);
          finishCallback?.();
          return initialCountdown;
        }

        return nextTime;
      });
    };

    if (isRunning) {
      timerRef.current = setTimeout(countDownUntilZero, INTERVAL_IN_MILLISECONDS);
    }
    return () => clearTimeout(timerRef.current);
  }, [finishCallback, initialCountdown, isRunning, referenceTime, time]);

  const toggleRunning = () => {
    if (isRunning) {
      setIsRunning(false);
      clearTimeout(timerRef.current);
    } else {
      setIsRunning(true);
      setReferenceTime(Date.now());
    }
  };

  return { time, toggleRunning, isRunning };
}

export default useCountdown;
