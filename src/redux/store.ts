import { configureStore } from "@reduxjs/toolkit";

import PlacesSlice from "./Places/PlacesSlice";
import WeatherSlice from "./Weather/WeatherSlice";

// ...

export const store = configureStore({
  reducer: {
    resturants: PlacesSlice,
    weather: WeatherSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
