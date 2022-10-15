import * as React from 'react';
import clsx from 'clsx';
import { type NodeProps } from 'reactflow';
import {
  NodeHeader,
  NodeName,
  NodeSimulationGraph,
  NodeValueItem,
  TimeOutputHandles,
} from './misc';
import type { TimeInputParameterNodeData } from '../models';
import { useDispatch } from 'react-redux';
import { type AppDispatch } from '../store';
import { setIsExpand } from '../ducks/react-flow';

const TimeInputParameterNode: React.FC<
  NodeProps<TimeInputParameterNodeData>
> = ({ id, data }) => {
  const { name, unit, values, isExpand } = data;
  const dispatch: AppDispatch = useDispatch();
  const onExpandChange = React.useCallback(
    (isExpand: boolean) => {
      dispatch(setIsExpand({ nodeId: id, isExpand }));
    },
    [dispatch, id]
  );
  return (
    <>
      <div
        className={clsx(
          'bg-base-100',
          'border-base-content',
          'border-[1px]',
          'rounded-sm',
          'cursor-grab'
        )}
      >
        <NodeHeader
          nodeType="timeInputParameter"
          isExpand={isExpand}
          onExpandChange={onExpandChange}
        />
        <NodeName name={name} />
        <TimeOutputHandles />
        {isExpand && <NodeValueItem label="単位" value={unit} />}
        {isExpand && <NodeSimulationGraph values={values} />}
      </div>
    </>
  );
};

export default TimeInputParameterNode;
