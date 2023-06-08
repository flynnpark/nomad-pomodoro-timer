interface Props {
  label: string;
  current: number;
  limit: number;
}

function Counter({ label, current, limit }: Props) {
  return (
    <div>
      <span>
        {current}/{limit}
      </span>
      <span>{label}</span>
    </div>
  );
}

export default Counter;
