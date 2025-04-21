import React, { useState } from "react";
import { produce } from "immer";
import { YAxisPanel } from "./YAxisPanel";
import { YValuesPanel } from "./YValuesPanel";
import { RowChartPageBy } from "./rowChartPageBy";

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
  nested1: {
    column: {
      type: string;
      name: string;
      id: 1;
      friends: string[];
    };
    row: {
      type: string;
      name: string;
      id: 1;
      friends: string[];
    };
  };
};

interface LeftPanelProps {
  init: State;
}

export const LeftPanel: React.FC<LeftPanelProps> = ({ init }) => {
  const [state, setState] = useState<State>(init);

  console.log("LeftPanel state", state);

  const onChange = (object: Partial<State>) => {
    console.log("onChange called with:", object);
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
      <RowChartPageBy
        columnValues={state.segments.columnValues}
        setColumnValues={(columnValues: string[]) => {
          onChange({ segments: { ...state.segments, columnValues } });
        }}
        rowValues={state.segments.rowValues}
        setRowValues={(rowValues: string[]) => {
          onChange({ segments: { ...state.segments, rowValues } });
        }}
        pageByValues={state.segments.pageByValues}
        setPageByValues={(pageByValues: string[]) => {
          onChange({ segments: { ...state.segments, pageByValues } });
        }}
        showStatistics={state.segments.showStatistics}
        setShowStatistics={(showStatistics: boolean) => {
          onChange({ segments: { ...state.segments, showStatistics } });
        }}
      />
    </div>
  );
};
