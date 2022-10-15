import * as React from 'react';
import clsx from 'clsx';

const AddNodeButton: React.FC = () => {
  return (
    <label
      htmlFor="add-node-modal"
      className={clsx('btn', 'btn-primary', 'btn-outline')}
    >
      add
    </label>
  );
};

export default AddNodeButton;
