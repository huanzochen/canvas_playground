import { LeftPanel } from "./leftPanel";

export const LeftPanelStory = () => {
  const state = { yValues: [], xValues: [], yaxisValues: [] };

  return (
    <div>
      Hello World!
      <LeftPanel init={state} />
    </div>
  );
};
