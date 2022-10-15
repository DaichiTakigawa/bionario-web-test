import * as React from 'react';
import clsx from 'clsx';
import { type NodeProps } from 'reactflow';
import {
  InputHandles,
  NodeHeader,
  NodeName,
  NodeSimulationGraph,
  NodeValueItem,
  TimeOutputHandles,
} from './misc';
import type { TimeVariableNodeData } from '../models';
import { useDispatch } from 'react-redux';
import { type AppDispatch } from '../store';
import { setIsExpand } from '../ducks/react-flow';

const TimeVariableNode: React.FC<NodeProps<TimeVariableNodeData>> = ({
  id,
  data,
}) => {
  const {
    name,
    unit,
    totalAmount,
    values,
    definition,
    inputNodeNames,
    isExpand,
  } = data;
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
          nodeType="timeVariable"
          isExpand={isExpand}
          onExpandChange={onExpandChange}
        />
        <NodeName name={name} />
        <InputHandles inputNodeNames={inputNodeNames} />
        <TimeOutputHandles />
        {isExpand && <NodeValueItem label="定義" value={definition ?? ''} />}
        {isExpand && <NodeValueItem label="単位" value={unit} />}
        {isExpand && (
          <NodeValueItem
            label="総和"
            value={totalAmount !== undefined ? `${totalAmount}` : ''}
          />
        )}
        {isExpand && <NodeSimulationGraph values={values} />}
      </div>
    </>
  );
};

export default TimeVariableNode;
