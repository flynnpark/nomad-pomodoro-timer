import styled from 'styled-components';

import { convertMillisecondsToMinutesAndSeconds } from '../../utils';
import TimerNumber from './TimerNumber';

const TimerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Colon = styled.span`
  margin: 0 6px;
  font-size: 48px;
  opacity: 50%;
`;

interface Props {
  remainedMilliseconds: number;
}

function Timer({ remainedMilliseconds }: Props) {
  const { minutes, seconds } = convertMillisecondsToMinutesAndSeconds(remainedMilliseconds);

  return (
    <TimerContainer>
      <TimerNumber value={minutes} />
      <Colon>:</Colon>
      <TimerNumber value={seconds} />
    </TimerContainer>
  );
}

export default Timer;
