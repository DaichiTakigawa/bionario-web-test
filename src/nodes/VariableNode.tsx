import * as React from 'react';
import clsx from 'clsx';
import { type NodeProps } from 'reactflow';
import {
  InputHandles,
  NodeHeader,
  NodeName,
  NodeValueItem,
  OutputHandle,
} from './misc';
import type { VariableNodeData } from '../models';
import { useDispatch } from 'react-redux';
import { type AppDispatch } from '../store';
import { setIsExpand } from '../ducks/react-flow';

const VariableNode: React.FC<NodeProps<VariableNodeData>> = ({ id, data }) => {
  const { name, unit, value, definition, inputNodeNames, isExpand } = data;
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
          nodeType="variable"
          isExpand={isExpand}
          onExpandChange={onExpandChange}
        />
        <NodeName name={name} />
        <InputHandles inputNodeNames={inputNodeNames} />
        <OutputHandle />
        {isExpand && <NodeValueItem label="定義" value={definition ?? ''} />}
        {isExpand && <NodeValueItem label="単位" value={unit} />}
        {isExpand && (
          <NodeValueItem
            label="値"
            value={value !== undefined ? `${value}` : ''}
          />
        )}
      </div>
    </>
  );
};

export default VariableNode;
