interface YaxisPanelProps {
  values: string[];
  setValues: (value: string[]) => void;
}

export const YaxisPanel = ({ values, setValues }: YaxisPanelProps) => {
  const yAxisOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setValues([e.currentTarget.value, ...values]);
  };

  return <button onClick={yAxisOnClick}>Hello</button>;
};
