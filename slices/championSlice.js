import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  champions: [],
};

export const championSlice = createSlice({
  name: "champion",
  initialState,
  reducers: {
    addChampion: (state, action) => {
      state.champions = [...state.champions, action.payload];
    },
  },
});

export const { addChampion } = championSlice.actions;

export const selectChampions = (state) => state.champion.champions;

export default championSlice.reducer;
