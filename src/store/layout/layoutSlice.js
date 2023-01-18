import { createSlice } from "@reduxjs/toolkit";
import { leftSidebarTypes } from "../../constants/layout";

const initialState = {
  isLeftMenuOpen: true,
  isLockScreen: false,
  leftSideBarType: leftSidebarTypes.DEFAULT,
};

const { reducer, actions } = createSlice({
  name: "LAYOUT",
  initialState,
  reducers: {
    toggleLeftMenu: state => {
      state.isLeftMenuOpen = !state.isLeftMenuOpen;
    },
    openLockScreen: state => {
      state.isLockScreen = true;
    },
    closeLockScreen: state => {
      state.isLockScreen = false;
    },
  },
});

export const { toggleLeftMenu, openLockScreen, closeLockScreen } = actions;

export default reducer;
