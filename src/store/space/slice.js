import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  spaces: [],
};

export const feed = createSlice({
  name: "feed",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    spacesFetched: (state, action) => {
      state.spaces = [...state.spaces, ...action.payload];
      state.loading = false;
    },
  },
});

export const { startLoading, spacesFetched } = feed.actions;

export default feed.reducer;
