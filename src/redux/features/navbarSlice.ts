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
    hideNavbar: (state) => {
      state.menueOpen = false;
    },
    /**
      as a 2nd parameter you can use PayloadAction
      isNavbarVisible: (state, action: PayloadAction<boolean>) {
        lab lab lab
        => action.payload
      }
    */
  },
});

// Action creators are generated for each case reducer function
export const { toggleMenue, hideNavbar } = navbarSlice.actions;

export default navbarSlice.reducer;
