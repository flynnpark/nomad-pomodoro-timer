import ControlButton from './components/ControlButton';
import Counter from './components/Counter';
import Logo from './components/Logo';
import Timer from './components/Timer';
import { DEFAULT_COUNTDOWN_MILLISECONDS, GOAL_LIMIT, ROUND_LIMIT } from './constants';
import useCountdown from './hooks/useCountdown';
import useCounter from './hooks/useCounter';

function App() {
  const { count: goalCount, increment: goalIncrement } = useCounter(GOAL_LIMIT);
  const { count: roundCount, increment: roundIncrement } = useCounter(ROUND_LIMIT, goalIncrement);
  const { time, toggleRunning, isRunning } = useCountdown(DEFAULT_COUNTDOWN_MILLISECONDS, roundIncrement);

  return (
    <>
      <Logo />
      <Timer remainedMilliseconds={time} />
      <ControlButton toggleRunning={toggleRunning} isRunning={isRunning} />
      <div>
        <Counter label="Round" current={roundCount} limit={ROUND_LIMIT} />
        <Counter label="Goal" current={goalCount} limit={GOAL_LIMIT} />
      </div>
    </>
  );
}

export default App;
