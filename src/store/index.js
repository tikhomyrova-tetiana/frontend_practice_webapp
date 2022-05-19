import { configureStore } from "@reduxjs/toolkit";

import appStateReducer from "./appState/slice";
import userReducer from "./user/slice";
import feedReducer from "./spaces/slice";
import spaceCardReducer from "./spacePage/slice";

export default configureStore({
  reducer: {
    appState: appStateReducer,
    user: userReducer,
    feed: feedReducer,
    spaceCard: spaceCardReducer,
  },
});
