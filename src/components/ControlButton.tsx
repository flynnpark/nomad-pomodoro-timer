import { MouseEventHandler } from 'react';

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

function ControlButton({ onClick }: Props) {
  return <button onClick={onClick}>Play</button>;
}

export default ControlButton;
