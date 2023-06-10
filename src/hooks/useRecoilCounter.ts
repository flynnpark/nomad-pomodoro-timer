import { type RecoilState, useRecoilState } from 'recoil';

function useRecoilCounter(recoilState: RecoilState<number>, limit: number, callback?: () => void) {
  const [count, setCount] = useRecoilState(recoilState);

  const increment = () => {
    const nextCount = (count + 1) % limit;
    if (nextCount === 0) {
      callback?.();
    }
    setCount(nextCount);
  };

  return {
    count,
    increment,
  };
}

export default useRecoilCounter;
