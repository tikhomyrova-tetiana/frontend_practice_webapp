import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  profile: null,
};
//added space after getting this from backend when we create a new user

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      state.token = action.payload.token;
      state.profile = action.payload.user;
    },
    logOut: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
      state.profile = null;
      //we need to add last for space
    },
    tokenStillValid: (state, action) => {
      state.profile = action.payload.user;
      // state.profile.space = action.payload.profile.space;
    },
    storyDeleteSuccess: (state, action) => {
      const storyId = action.payload.storyId;
      state.profile.space.stories = state.profile.space.stories.filter(
        (story) => story.id !== storyId
      );
    },
    storyPostedSuccess: (state, action) => {
      state.profile.space.stories = [
        ...state.profile.space.stories,
        action.payload,
      ];
    },
  },
});

export const {
  loginSuccess,
  logOut,
  tokenStillValid,
  storyDeleteSuccess,
  storyPostedSuccess,
} = userSlice.actions;

export default userSlice.reducer;
