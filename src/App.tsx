import ControlButton from './components/ControlButton';
import Counter from './components/Counter';
import Logo from './components/Logo';
import Timer from './components/Timer';

function App() {
  return (
    <>
      <Logo />
      <Timer />
      <ControlButton />
      <div>
        <Counter />
        <Counter />
      </div>
    </>
  );
}

export default App;
