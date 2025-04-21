import React from "react";

interface YValuesPanelProps {
  values: string[];
  setValues: (value: string[]) => void;
}
// This component is a placeholder for the Y Values panel.
// It currently does not have any functionality or UI.
// You can add your own logic and UI as per your requirements.
// The component accepts `values` and `setValues` as props.
// `values` is an array of strings representing the Y values.
// `setValues` is a function to update the Y values.

export const YValuesPanel: React.FC<YValuesPanelProps> = ({
  values,
  setValues,
}) => {
  const handleYValuesChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    setValues([e.currentTarget.value, ...values]);
    // This is just a placeholder. You can implement your own logic here.
  };
  return (
    <div>
      <h2>Y Values</h2>
      <button onClick={handleYValuesChange} value={"BKM1.2"}>
        handleYValuesChange
      </button>
    </div>
  );
};
export default YValuesPanel;
// This component is a placeholder for the Y Values panel.
