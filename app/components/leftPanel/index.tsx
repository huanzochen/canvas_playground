import { LeftPanel } from "./leftPanel";

export const LeftPanelStory = () => {
  const state = {
    yValues: [],
    xValues: [],
    yAxisValues: [],
    segments: {
      columnValues: [],
      rowValues: [],
      pageByValues: [],
      showStatistics: false,
    },
  };

  return (
    <div>
      LeftPanelStory
      <LeftPanel init={state} />
    </div>
  );
};
