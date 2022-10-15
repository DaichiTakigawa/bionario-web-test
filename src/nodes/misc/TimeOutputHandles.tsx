import * as React from 'react';
import clsx from 'clsx';
import { Handle, Position } from 'reactflow';

const TimeOutputHandles: React.FC = () => {
  return (
    <div className={clsx('mb-1')}>
      <div className={clsx('relative', 'h-4')}>
        <label className={clsx('absolute', 'top-[-4%]', 'right-2', 'text-xs')}>
          t-1
        </label>
        <Handle
          type="source"
          id="t-1"
          position={Position.Right}
          style={{ top: '50%' }}
        />
      </div>
      <div className={clsx('relative', 'h-4')}>
        <label className={clsx('absolute', 'top-[-4%]', 'right-2', 'text-xs')}>
          t
        </label>
        <Handle
          type="source"
          id="t"
          position={Position.Right}
          style={{ top: '50%' }}
        />
      </div>
      <div className={clsx('relative', 'h-4')}>
        <label className={clsx('absolute', 'top-[-4%]', 'right-2', 'text-xs')}>
          sum
        </label>
        <Handle
          type="source"
          id="sum"
          position={Position.Right}
          style={{ top: '50%' }}
        />
      </div>
    </div>
  );
};

export default TimeOutputHandles;
