import styled from 'styled-components';

import { ControlButton, Counter, Logo, Timer } from './components';
import { DEFAULT_COUNTDOWN_MILLISECONDS, GOAL_LIMIT, ROUND_LIMIT } from './constants';
import { useCountdown, useCounter } from './hooks';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 960px;
  margin: auto;
  align-items: center;
`;

const LogoContainer = styled.div`
  margin-top: 100px;
`;

const TimerContainer = styled.div`
  margin-top: 150px;
`;

const ButtonContainer = styled.div`
  margin-top: 75px;
`;

const CounterContainer = styled.div`
  margin-top: 75px;
  margin-bottom: 40px;
  display: flex;
  width: 320px;
  flex-direction: row;
  justify-content: space-around;
`;

function App() {
  const { count: goalCount, increment: goalIncrement } = useCounter(GOAL_LIMIT);
  const { count: roundCount, increment: roundIncrement } = useCounter(ROUND_LIMIT, goalIncrement);
  const { time, toggleRunning, isRunning } = useCountdown(DEFAULT_COUNTDOWN_MILLISECONDS, roundIncrement);

  return (
    <AppContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <TimerContainer>
        <Timer remainedMilliseconds={time} />
      </TimerContainer>
      <ButtonContainer>
        <ControlButton toggleRunning={toggleRunning} isRunning={isRunning} />
      </ButtonContainer>
      <CounterContainer>
        <Counter label="Round" current={roundCount} limit={ROUND_LIMIT} />
        <Counter label="Goal" current={goalCount} limit={GOAL_LIMIT} />
      </CounterContainer>
    </AppContainer>
  );
}

export default App;
