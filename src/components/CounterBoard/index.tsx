import { useRecoilValue } from 'recoil';

import { GOAL_LIMIT, ROUND_LIMIT } from '../../constants';
import { goalState, roundState } from '../../states/atom';
import Counter from './Counter';

function CounterBoard() {
  const roundCount = useRecoilValue(roundState);
  const goalCount = useRecoilValue(goalState);

  return (
    <>
      <Counter label="Round" current={roundCount} limit={ROUND_LIMIT} />
      <Counter label="Goal" current={goalCount} limit={GOAL_LIMIT} />
    </>
  );
}

export default CounterBoard;
