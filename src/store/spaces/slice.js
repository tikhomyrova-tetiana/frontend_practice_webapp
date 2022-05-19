import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  spaces: [],
};

export const feed = createSlice({
  name: "spaces",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    spacesFetched: (state, action) => {
      state.spaces = action.payload;
      state.loading = false;
    },
  },
});

export const { startLoading, spacesFetched } = feed.actions;

export default feed.reducer;
