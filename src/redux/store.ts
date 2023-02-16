import { configureStore } from '@reduxjs/toolkit';
import themeSlicer from './theme/themeSlicer';

export const store = configureStore({
  reducer: {
    theme: themeSlicer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
