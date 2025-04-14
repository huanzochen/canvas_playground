interface YaxisPanelProps {
  value: string[];
  setValue: (value: string[]) => void;
}

export const YaxisPanel = ({ value, setValue }: YaxisPanelProps) => {
  const yAxisOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setValue([e.currentTarget.value, ...value]);
  };

  return <button onClick={yAxisOnClick}>Hello</button>;
};
