"use client";
import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialDarkModeState = { dark: false };
const initialSheetCloseState = { close: true, openSheet: false };
const sheetSlice = createSlice({
  initialState: initialSheetCloseState,
  reducers: {
    close: (state) => {
      state.close = !state.close;
      state.openSheet = !state.openSheet;
    },
  },
  name: "sheetClose",
});
const darkModeSlice = createSlice({
  initialState: initialDarkModeState,
  reducers: {
    dark: (state) => {
      state.dark = !state.dark;
    },
  },
  name: "darkMode",
});

const store = configureStore({
  reducer: { dark: darkModeSlice.reducer, sheetClose: sheetSlice.reducer },
});
export const darkMode = darkModeSlice.actions;
export const sheetClose = sheetSlice.actions;
export default store;
