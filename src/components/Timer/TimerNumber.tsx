import { motion } from 'framer-motion';
import styled from 'styled-components';

import { formatNumber } from '../../utils';

const NumberContainer = styled(motion.span)`
  border-radius: 10px;
  background-color: ${(props) => props.theme.secondaryColor};
  font-size: 60px;
  color: ${(props) => props.theme.primaryColor};
  padding: 70px 35px;
  font-weight: 900;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
`;

interface Props {
  value: number;
}

function TimerNumber({ value }: Props) {
  return (
    <NumberContainer
      key={value}
      initial={{ scale: 0.8, opacity: 0.7 }}
      animate={{ scale: 1.0, opacity: 1.0 }}
      transition={{ type: 'spring', stiffness: 100, duration: 0.2 }}
    >
      {formatNumber(value)}
    </NumberContainer>
  );
}

export default TimerNumber;
