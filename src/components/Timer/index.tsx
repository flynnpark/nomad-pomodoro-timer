import { convertMillisecondsToMinutesAndSeconds } from '../../utils';
import TimerNumber from './TimerNumber';

interface Props {
  remainedMilliseconds: number;
}

function Timer({ remainedMilliseconds }: Props) {
  const { minutes, seconds } = convertMillisecondsToMinutesAndSeconds(remainedMilliseconds);

  return (
    <>
      <TimerNumber value={minutes} />:<TimerNumber value={seconds} />
    </>
  );
}

export default Timer;
