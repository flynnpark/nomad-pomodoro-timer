import { useRecoilValue } from 'recoil';

import { GOAL_LIMIT, ROUND_LIMIT } from '../../constants';
import { counterState } from '../../states/atom';
import Counter from './Counter';

function CounterBoard() {
  const status = useRecoilValue(counterState);

  return (
    <>
      <Counter label="Round" current={status.round} limit={ROUND_LIMIT} />
      <Counter label="Goal" current={status.goal} limit={GOAL_LIMIT} />
    </>
  );
}

export default CounterBoard;
