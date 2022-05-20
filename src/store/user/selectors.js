export const selectToken = (state) => state.user.token;

export const selectUser = (state) => state.user.profile;

export const selectMySpace = (reduxState) => reduxState.user.profile?.space;
