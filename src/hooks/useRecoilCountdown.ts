import { useEffect, useRef } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';

import { INTERVAL_IN_MILLISECONDS } from '../constants';
import { countdownStuffState, timeState } from '../states/atom';

function useRecoilCountdown() {
  const [time, setTime] = useRecoilState(timeState);
  const resetTime = useResetRecoilState(timeState)
  const [countStuff, setCountdownStuff] = useRecoilState(countdownStuffState);
  const timerRef = useRef<number>();

  useEffect(() => {
    const countdownUntilZero = () => {
      const now = Date.now();
      const interval = now - countStuff.referenceTime;
      const nextTime = time - interval;

      if (nextTime <= 0) {
        setCountdownStuff({
          ...countStuff,
          referenceTime: now,
          isRunning: false,
        });
        resetTime();
      } else {
        setCountdownStuff({
          ...countStuff,
          referenceTime: now,
        });
        setTime(nextTime);
      }
    };

    if (countStuff.isRunning) {
      timerRef.current = setTimeout(countdownUntilZero, INTERVAL_IN_MILLISECONDS);
    }

    return () => clearTimeout(timerRef.current);
  }, [countStuff, resetTime, setCountdownStuff, setTime, time]);

  const toggle = () => {
    if (countStuff.isRunning) {
      setCountdownStuff((prev) => ({ ...prev, isRunning: false }));
    } else {
      setCountdownStuff((prev) => ({ ...prev, referenceTime: Date.now(), isRunning: true }));
    }
  };

  return { time, toggle };
}

export default useRecoilCountdown;