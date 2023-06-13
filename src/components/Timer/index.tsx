import styled from 'styled-components';

import { useRecoilCountdown, useRecoilCounter } from '../../hooks';
import { convertMillisecondsToMinutesAndSeconds } from '../../utils';
import ControlButton from './ControlButton';
import TimerNumber from './TimerNumber';

const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Colon = styled.span`
  margin: 0 6px;
  font-size: 48px;
  opacity: 50%;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const BottomSection = styled.div`
  display: flex;
  margin-top: 75px;
  justify-content: center;
`;

function Timer() {
  const { countdownCallback } = useRecoilCounter();
  const { time, toggle, isRunning } = useRecoilCountdown(countdownCallback);
  const { minutes, seconds } = convertMillisecondsToMinutesAndSeconds(time);

  return (
    <TimerContainer>
      <TopSection>
        <TimerNumber value={minutes} />
        <Colon>:</Colon>
        <TimerNumber value={seconds} />
      </TopSection>
      <BottomSection>
        <ControlButton toggle={toggle} isRunning={isRunning} />
      </BottomSection>
    </TimerContainer>
  );
}

export default Timer;
