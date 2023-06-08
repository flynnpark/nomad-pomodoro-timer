import ControlButton from './components/ControlButton';
import Counter from './components/Counter';
import Logo from './components/Logo';
import Timer from './components/Timer';
import useCountdown from './hooks/useCountdown';

function App() {
  const defaultTime = 1000000;
  const { time, toggleRunning } = useCountdown(defaultTime);

  return (
    <>
      <Logo />
      <Timer remainedMilliseconds={time} />
      <ControlButton onClick={() => toggleRunning()} />
      <div>
        <Counter />
        <Counter />
      </div>
    </>
  );
}

export default App;
