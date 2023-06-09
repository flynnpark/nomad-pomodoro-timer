import { atom } from 'recoil';

import { DEFAULT_COUNTDOWN_MILLISECONDS } from '../constants';

export const timeState = atom({
  key: 'time',
  default: DEFAULT_COUNTDOWN_MILLISECONDS,
});

export const countdownStuffState = atom({
  key: 'countdownStuff',
  default: {
    referenceTime: Date.now(),
    isRunning: false,
  },
});

export const counterState = atom({
  key: 'status',
  default: {
    round: 0,
    goal: 0,
  },
});
