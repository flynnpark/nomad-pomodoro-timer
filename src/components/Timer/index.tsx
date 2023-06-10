import styled from 'styled-components';

import { GOAL_LIMIT, ROUND_LIMIT } from '../../constants';
import useRecoilCountdown from '../../hooks/useRecoilCountdown';
import useRecoilCounter from '../../hooks/useRecoilCounter';
import { goalState, roundState } from '../../states/atom';
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
  const { increment: goalIncrement } = useRecoilCounter(goalState, GOAL_LIMIT);
  const { increment: roundIncrement } = useRecoilCounter(roundState, ROUND_LIMIT, goalIncrement);
  const { time, toggle, isRunning } = useRecoilCountdown(roundIncrement);
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
