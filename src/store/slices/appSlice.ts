import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

export interface AppState {
  theme: Theme;
}

const initialState: AppState = {
  theme: Theme.Light,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = appSlice.actions;

export default appSlice.reducer;
