import { ThemeState } from "@/redux/interfaces";
import { getInitialTheme, rawSetTheme } from "@/utils";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialTheme = await getInitialTheme(); //* first visit to the website
rawSetTheme(initialTheme); //* set html class to html tag

const initialState: ThemeState = {
  theme: initialTheme,
};

const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
      rawSetTheme(state.theme);
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
