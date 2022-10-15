import { configureStore } from '@reduxjs/toolkit';
import reactFlow from './ducks/react-flow';

export const store = configureStore({
  reducer: {
    reactFlow: reactFlow,
  },
});

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
