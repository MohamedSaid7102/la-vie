import { createSlice } from '@reduxjs/toolkit';

export interface NavbarState {
  menueOpen: boolean;
}

const initialState: NavbarState = {
  menueOpen: false,
};

export const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    toggleMenue: (state) => {
      state.menueOpen = !state.menueOpen;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleMenue } = navbarSlice.actions;

export default navbarSlice.reducer;
