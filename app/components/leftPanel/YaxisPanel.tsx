interface YAxisPanelProps {
  values: string[];
  setValues: (value: string[]) => void;
}

export const YAxisPanel = ({ values, setValues }: YAxisPanelProps) => {
  const yAxisOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setValues([e.currentTarget.value, ...values]);
  };

  return <button onClick={yAxisOnClick}>YAxisPanel</button>;
};
