import { configureStore } from "@reduxjs/toolkit";
import championReducer from "../slices/championSlice";

export const store = configureStore({
  reducer: {
    champion: championReducer,
  },
});
