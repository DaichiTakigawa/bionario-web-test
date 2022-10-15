import * as React from 'react';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { type AppDispatch } from './store';

const PlayButton: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const onPlayClick = React.useCallback<
    React.MouseEventHandler<HTMLButtonElement>
  >(() => {
    // TODO
  }, []);

  return (
    <button className={clsx('btn', 'btn-primary')} onClick={onPlayClick}>
      play
    </button>
  );
};

export default PlayButton;
