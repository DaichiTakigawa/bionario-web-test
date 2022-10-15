import * as React from 'react';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { type AppDispatch } from './store';
import { addNode } from './ducks/react-flow';
import type { SimulationNodeType } from './models';

type NodeButtonType = {
  label: string;
  inputRef: React.RefObject<HTMLInputElement>;
  nodeType: SimulationNodeType;
};

const NodeButton: React.FC<NodeButtonType> = ({
  label,
  inputRef,
  nodeType,
}) => {
  const dispatch: AppDispatch = useDispatch();
  const onClick = React.useCallback(() => {
    const currentRef = inputRef.current;
    if (!currentRef) {
      return;
    }
    dispatch(addNode({ nodeType }));
    currentRef.click();
  }, [dispatch, inputRef]);

  return (
    <button
      className={clsx(
        'btn',
        'btn-outline',
        'btn-primary',
        'btn-md',
        'rounded-md'
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

const AddNodeModal: React.FC = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <>
      <input
        ref={inputRef}
        type="checkbox"
        id="add-node-modal"
        className={clsx('modal-toggle')}
      />
      <div className={clsx('modal')}>
        <div className={clsx('modal-box')}>
          <label className={clsx('text-lg', 'font-bold')}>ノードを追加</label>
          <div className={clsx('my-4')}>
            <label className={clsx('text-base')}>入力パラメータ</label>
            <div className={clsx('flex', 'flex-row', 'gap-4', 'my-2')}>
              <NodeButton
                label="入力パラメータ"
                inputRef={inputRef}
                nodeType="inputParameter"
              />
              <NodeButton
                label="時間入力パラメータ"
                inputRef={inputRef}
                nodeType="timeInputParameter"
              />
            </div>
          </div>
          <div className={clsx('my-4')}>
            <label className={clsx('text-base')}>変数</label>
            <div className={clsx('flex', 'flex-row', 'gap-4', 'my-2')}>
              <NodeButton
                label="変数"
                inputRef={inputRef}
                nodeType="variable"
              />
              <NodeButton
                label="時間変数"
                inputRef={inputRef}
                nodeType="timeVariable"
              />
            </div>
          </div>

          <div className={clsx('modal-action')}>
            <label htmlFor="add-node-modal" className={clsx('btn')}>
              close
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNodeModal;
