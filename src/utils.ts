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

  let minutes = Math.floor(milliseconds / 60000); // 1분 = 60,000밀리초
  let seconds = Math.ceil((milliseconds % 60000) / 1000); // 1초 = 1,000밀리초

  // 초가 60보다 크거나 같을 경우 분에 1을 더하고 초를 조정
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
