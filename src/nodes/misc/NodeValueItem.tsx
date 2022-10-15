import * as React from 'react';
import clsx from 'clsx';

type Props = {
  label: string;
  value: string;
};

const NodeValueItem: React.FC<Props> = ({ label, value }) => {
  return (
    <div className={clsx('ml-2', 'mb-1')}>
      <label className={clsx('text-xs')}>{label}</label>
      <div className={clsx('ml-1', 'mr-4')}>
        <h4 className={clsx('text-base')}>{value}</h4>
      </div>
    </div>
  );
};

export default NodeValueItem;
