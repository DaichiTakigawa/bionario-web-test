import * as React from 'react';
import clsx from 'clsx';

type Props = {
  name: string;
};

const NodeName: React.FC<Props> = ({ name }) => {
  return (
    <div className={clsx('text-base', 'font-bold', 'mb-1', 'mx-2')}>{name}</div>
  );
};

export default NodeName;
