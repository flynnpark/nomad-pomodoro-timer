import { MouseEventHandler } from 'react';

interface Props {
  toggleRunning: MouseEventHandler<HTMLButtonElement>;
  isRunning: boolean;
}

function ControlButton({ toggleRunning, isRunning }: Props) {
  return <button onClick={toggleRunning}>{isRunning ? 'Stop' : 'Play'}</button>;
}

export default ControlButton;
