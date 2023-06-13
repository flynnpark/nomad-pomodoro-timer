import { useRecoilCallback, useSetRecoilState } from 'recoil';

import { GOAL_LIMIT, ROUND_LIMIT } from '../constants';
import { counterState } from '../states/atom';

function useRecoilCounter() {
  const setCounter = useSetRecoilState(counterState);
  const countdownCallback = useRecoilCallback(({ snapshot }) => async () => {
    const currentStatus = await snapshot.getPromise(counterState);
    const nextStatus = { ...currentStatus };

    nextStatus.round = (currentStatus.round + 1) % ROUND_LIMIT;

    if (nextStatus.round === 0) {
      const nextGoal = (currentStatus.goal + 1) % GOAL_LIMIT;
      nextStatus.goal = nextGoal;
    }
    setCounter(nextStatus);
  });

  return { countdownCallback };
}

export default useRecoilCounter;
