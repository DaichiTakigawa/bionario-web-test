import * as React from 'react';
import clsx from 'clsx';
import { type NodeProps } from 'reactflow';
import { NodeHeader, NodeName, NodeValueItem, OutputHandle } from './misc';
import type { InputParameterNodeData } from '../models';
import { useDispatch } from 'react-redux';
import { type AppDispatch } from '../store';
import { setIsExpand } from '../ducks/react-flow';

const InputParameterNode: React.FC<NodeProps<InputParameterNodeData>> = ({
  id,
  data,
}) => {
  const { name, unit, value, isExpand } = data;
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
          nodeType="inputParameter"
          isExpand={isExpand}
          onExpandChange={onExpandChange}
        />
        <NodeName name={name} />
        <OutputHandle />
        {isExpand && <NodeValueItem label="単位" value={unit} />}
        {isExpand && (
          <NodeValueItem label="値" value={value ? `${value}` : ''} />
        )}
      </div>
    </>
  );
};

export default InputParameterNode;
