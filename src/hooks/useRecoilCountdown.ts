import { useEffect, useRef } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';

import { INTERVAL_IN_MILLISECONDS } from '../constants';
import { countdownStuffState, timeState } from '../states/atom';

function useRecoilCountdown(callback?: () => void) {
  const [time, setTime] = useRecoilState(timeState);
  const resetTime = useResetRecoilState(timeState);
  const [countdownStuff, setCountdownStuff] = useRecoilState(countdownStuffState);
  const timerRef = useRef<number>();

  useEffect(() => {
    const countdownUntilZero = () => {
      const now = Date.now();
      const interval = now - countdownStuff.referenceTime;
      const nextTime = time - interval;

      if (nextTime <= 0) {
        setCountdownStuff({
          ...countdownStuff,
          referenceTime: now,
          isRunning: false,
        });
        resetTime();
        callback?.();
      } else {
        setCountdownStuff({
          ...countdownStuff,
          referenceTime: now,
        });
        setTime(nextTime);
      }
    };

    if (countdownStuff.isRunning) {
      timerRef.current = setTimeout(countdownUntilZero, INTERVAL_IN_MILLISECONDS);
    }

    return () => clearTimeout(timerRef.current);
  }, [callback, countdownStuff, resetTime, setCountdownStuff, setTime, time]);

  const toggle = () => {
    if (countdownStuff.isRunning) {
      setCountdownStuff((prev) => ({ ...prev, isRunning: false }));
    } else {
      setCountdownStuff((prev) => ({ ...prev, referenceTime: Date.now(), isRunning: true }));
    }
  };

  return { time, toggle, isRunning: countdownStuff.isRunning };
}

export default useRecoilCountdown;
