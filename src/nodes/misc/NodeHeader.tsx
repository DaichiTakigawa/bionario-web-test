import * as React from 'react';
import clsx from 'clsx';
import type { SimulationNodeType } from '../../models';

type Props = {
  nodeType: SimulationNodeType;
  isExpand: boolean;
  onExpandChange: (isExpand: boolean) => void;
};

const nodeTypeToLabel: { [key in SimulationNodeType]: string } = {
  inputParameter: '入力パラメータ',
  variable: '変数',
  timeInputParameter: '時間入力パラメータ',
  timeVariable: '時間変数',
};

const nodeTypeToColor: { [key in SimulationNodeType]: string } = {
  inputParameter: '#3ABFF8',
  variable: '#36D399',
  timeInputParameter: '#FBBD23',
  timeVariable: '#F87272',
};

const NodeHeader: React.FC<Props> = ({
  nodeType,
  isExpand,
  onExpandChange,
}) => {
  const label = nodeTypeToLabel[nodeType];
  const color = nodeTypeToColor[nodeType];
  const onClick = React.useCallback<
    React.MouseEventHandler<HTMLButtonElement>
  >(() => {
    onExpandChange(!isExpand);
  }, [isExpand, onExpandChange]);

  return (
    <div className={clsx('flex', 'flex-row')}>
      <div className={clsx('flex-grow', 'ml-2', 'mt-2')}>
        <label className={clsx('text-2xs')} style={{ color: color }}>
          {label}
        </label>
      </div>
      <div className={clsx('flex-grow-0', 'relative', 'h-5', 'w-8')}>
        <button
          className={clsx('absolute', 'top-1', 'right-2', 'text-[0.8rem]')}
          onClick={onClick}
        >
          {isExpand ? '-' : '+'}
        </button>
      </div>
    </div>
  );
};

export default NodeHeader;
