import { useState } from "react";
import { YaxisPanel } from "./YaxisPanel";
import { produce } from "immer";

export type State = {
  yValues: string[];
  xValues: string[];
  yaxisValues: string[];
};

interface LeftPanelProps {
  init: State;
}

export const LeftPanel = ({ init }: LeftPanelProps) => {
  const [state, setState] = useState<State>(init);

  const onChange = (object: Partial<State>) => {
    setState((baseState) => {
      return produce(baseState, (draft) => {
        Object.assign(draft, object);
      });
    });
  };

  return (
    <div>
      Hello world
      <YaxisPanel
        value={state.yaxisValues}
        setValue={(yaxisValues: string[]) => {
          onChange({ yaxisValues });
        }}
      />
    </div>
  );
};
