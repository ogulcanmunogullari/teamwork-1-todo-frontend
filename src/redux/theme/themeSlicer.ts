import { createSlice } from '@reduxjs/toolkit';
import { Itheme } from '../../interfaces/globals';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: <Itheme>{
    isLight: true,
  },
  reducers: {
    changeTheme: (state) => {
      state.isLight = !state.isLight;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
