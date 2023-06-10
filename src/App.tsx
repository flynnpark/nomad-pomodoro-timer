import styled from 'styled-components';

import { CounterBoard, Logo, Timer } from './components';

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

const CounterContainer = styled.div`
  margin-top: 75px;
  margin-bottom: 40px;
  display: flex;
  width: 320px;
  flex-direction: row;
  justify-content: space-around;
`;

function App() {
  return (
    <AppContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <TimerContainer>
        <Timer />
      </TimerContainer>
      <CounterContainer>
        <CounterBoard />
      </CounterContainer>
    </AppContainer>
  );
}

export default App;
