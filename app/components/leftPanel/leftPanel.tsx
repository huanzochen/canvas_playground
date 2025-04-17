import React, { useState } from "react";
import { YAxisPanel } from "./YAxisPanel";
import { YValuesPanel } from "./YValuesPanel";
import { produce } from "immer";

type Segments = {
  columnValues: string[];
  rowValues: string[];
  pageByValues: string[];
  showStatistics: boolean;
};

export type State = {
  yValues: string[];
  xValues: string[];
  yAxisValues: string[];
  segments: Segments;
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
      LeftPanel
      <YAxisPanel
        values={state.yAxisValues}
        setValues={(yAxisValues: string[]) => {
          onChange({ yAxisValues });
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
