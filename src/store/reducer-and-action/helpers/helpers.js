import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkTheme: false,
};

const helpersSlice = createSlice({
  name: "helpers",
  initialState,
  reducers: {
    setDarkTheme(state, action) {
      state.darkTheme = action.payload;
    },
  },
});

export const { setDarkTheme } = helpersSlice.actions;

export const getDarkThemeStatus = createSelector(
  (state) => state.helpers,
  (helpers) => helpers.darkTheme
);
export default helpersSlice.reducer;
