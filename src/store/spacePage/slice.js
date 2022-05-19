import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  space: null,
};

export const spaceCard = createSlice({
  name: "spaceCard",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    spaceCardFetched: (state, action) => {
      state.space = action.payload;
      state.loading = false;
    },
  },
});

export const { startLoading, spaceCardFetched } = spaceCard.actions;

export default spaceCard.reducer;
