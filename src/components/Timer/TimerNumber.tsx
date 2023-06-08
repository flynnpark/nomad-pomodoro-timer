import { formatNumber } from '../../utils';

interface Props {
  value: number;
}

function TimerNumber({ value }: Props) {
  return <span>{formatNumber(value)}</span>;
}

export default TimerNumber;
