import { motion } from 'framer-motion';
import { MouseEventHandler } from 'react';
import styled from 'styled-components';

import { PauseIcon, PlayIcon } from './icons';

const Button = styled(motion.button)`
  display: flex;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: none;
  background-color: rgba(0, 0, 0, 0.2);
  justify-content: center;
  align-items: center;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
`;

interface Props {
  toggleRunning: MouseEventHandler<HTMLButtonElement>;
  isRunning: boolean;
}

function ControlButton({ toggleRunning, isRunning }: Props) {
  return (
    <Button
      onClick={toggleRunning}
      whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
      whileTap={{
        scale: 0.8,
        transition: { duration: 0.2 },
      }}
    >
      {isRunning ? <PauseIcon color="#fff" width={60} /> : <PlayIcon color="#fff" width={60} />}
    </Button>
  );
}

export default ControlButton;
