import { configureStore } from '@reduxjs/toolkit';

import appReducer from 'store/slices/appSlice';

const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
