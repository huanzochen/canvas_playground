import React, { useState } from "react";
import { YaxisPanel } from "./YaxisPanel";
import { YValuesPanel } from "./YValuesPanel";
import { produce } from "immer";

export type State = {
  yValues: string[];
  xValues: string[];
  yaxisValues: string[];
};

interface LeftPanelProps {
  init: State;
}

export const LeftPanel: React.FC<LeftPanelProps> = ({ init }) => {
  const [state, setState] = useState<State>(init);

  console.log("LeftPanel state", state);

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
        values={state.yaxisValues}
        setValues={(yaxisValues: string[]) => {
          onChange({ yaxisValues });
        }}
      />
      <YValuesPanel
        values={state.yValues}
        setValues={(yValues: string[]) => {
          onChange({ yValues });
        }}
      />
    </div>
  );
};
