import * as React from 'react';
import clsx from 'clsx';
import { Handle, Position } from 'reactflow';

type Props = {
  inputNodeNames: string[];
};

const InputHandles: React.FC<Props> = ({ inputNodeNames }) => {
  return (
    <div className={clsx('mb-1')}>
      <div className={clsx('relative')}>
        <div className={clsx('ml-2', 'mr-auto')}>
          <label className={clsx('text-xs')}>inputs</label>
        </div>
        <Handle type="target" position={Position.Left} style={{ top: '56%' }} />
      </div>
      <div className={clsx('mb-2')}>
        {inputNodeNames.map((inputNodeName) => {
          return (
            <div
              key={inputNodeName}
              className={clsx('ml-3', 'text-xs', 'font-bold')}
            >
              {inputNodeName}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InputHandles;
