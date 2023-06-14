import { MINUTE, SECOND } from "./constants";

interface ConvertMillisecondsToMinutesAndSecondsResult {
  minutes: number;
  seconds: number;
}

export const convertMillisecondsToMinutesAndSeconds = (
  milliseconds: number
): ConvertMillisecondsToMinutesAndSecondsResult => {
  if (milliseconds <= 0) {
    return {
      minutes: 0,
      seconds: 0,
    };
  }

  let minutes = Math.floor(milliseconds / MINUTE); 
  let seconds = Math.ceil((milliseconds % MINUTE) / SECOND); 

  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }

  return {
    minutes,
    seconds,
  };
};

export const formatNumber = (num: number): string => {
  return num.toString().padStart(2, '0');
};
