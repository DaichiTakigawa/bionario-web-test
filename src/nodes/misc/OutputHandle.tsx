import * as React from 'react';
import clsx from 'clsx';
import { Handle, Position } from 'reactflow';

const OutputHandle: React.FC = () => {
  return (
    <div className={clsx('mb-1')}>
      <div className={clsx('relative')}>
        <div className={clsx('ml-auto', 'mr-2', 'text-right')}>
          <label className={clsx('text-xs')}>output</label>
        </div>
        <Handle
          type="source"
          position={Position.Right}
          style={{ top: '56%' }}
        />
      </div>
    </div>
  );
};

export default OutputHandle;
