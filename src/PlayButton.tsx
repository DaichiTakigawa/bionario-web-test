import * as React from 'react';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { type AppDispatch } from './store';
import { playSimulation } from './ducks/react-flow';

const PlayButton: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const onPlayClick = React.useCallback<
    React.MouseEventHandler<HTMLButtonElement>
  >(() => {
    dispatch(playSimulation());
  }, []);

  return (
    <button className={clsx('btn', 'btn-primary')} onClick={onPlayClick}>
      play
    </button>
  );
};

export default PlayButton;
