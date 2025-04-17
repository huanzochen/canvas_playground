import type { JSX } from "react";

interface RowChartPageByProps {
  columnValues: string[];
  setColumnValues: (value: string[]) => void;
  rowValues: string[];
  setRowValues: (value: string[]) => void;
  pageByValues: string[];
  setPageByValues: (value: string[]) => void;
  showStatistics: boolean;
  setShowStatistics: (value: boolean) => void;
}

export const RowChartPageBy = ({
  columnValues,
  setColumnValues,
  rowValues,
  setRowValues,
  pageByValues,
  setPageByValues,
  showStatistics,
  setShowStatistics,
}: RowChartPageByProps): JSX.Element => {
  const handleColumnClick = () => {
    setColumnValues(["column1", "column2", "column3"]);
  };

  const handleRowClick = () => {
    setRowValues(["row1", "row2", "row3"]);
  };

  return (
    <div>
      <h2>Row Chart Page By</h2>
      <p>This is the Row Chart Page By component.</p>

      <button onClick={handleColumnClick}>Column change</button>

      <button onClick={handleRowClick}>Row change</button>
    </div>
  );
};
