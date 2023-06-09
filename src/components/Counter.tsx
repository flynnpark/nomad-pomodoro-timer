import styled from 'styled-components';

const CounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StatusWrapper = styled.span`
  color: rgba(255, 255, 255, 0.6);
`;

const LabelWrapper = styled.span`
  color: ${(props) => props.theme.secondaryColor};
  margin-top: 16px;
`;

interface Props {
  label: string;
  current: number;
  limit: number;
}

function Counter({ label, current, limit }: Props) {
  return (
    <CounterWrapper>
      <StatusWrapper>
        {current}/{limit}
      </StatusWrapper>
      <LabelWrapper>{label}</LabelWrapper>
    </CounterWrapper>
  );
}

export default Counter;
