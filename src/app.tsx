import * as React from 'react';
import clsx from 'clsx';
import { Provider } from 'react-redux';
import ReactFlowExample from './ReactFlowExample';
import { store } from './store';
import PlayButton from './PlayButton';
import AddNodeButton from './AddNodeButton';
import AddNodeModal from './AddNodeModal';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className={clsx('flex', 'flex-col', 'h-screen', 'w-full')}>
        <div className={clsx('w-full', 'p-8', 'flex-grow-0')}>
          <div className={clsx('flex', 'flex-row', 'gap-4')}>
            <PlayButton />
            <AddNodeButton />
          </div>
        </div>
        <div className={clsx('w-full', 'h-full', 'px-16', 'pb-16')}>
          <ReactFlowExample />
        </div>
      </div>
      <AddNodeModal />
    </Provider>
  );
};

export default App;
