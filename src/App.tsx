import * as React from 'react';
import clsx from 'clsx';

const App: React.FC = () => {
  return (
    <div
      className={clsx(
        'flex',
        'flex-col',
        'justify-center',
        'items-center',
        'h-screen',
        'gap-3'
      )}
    >
      <div className={clsx('text-4xl', 'font-bold')}>hello world</div>
      <div>
        <button className={clsx('btn', 'btn-primary')}>
          Let&apos;s start!
        </button>
      </div>
    </div>
  );
};

export default App;
