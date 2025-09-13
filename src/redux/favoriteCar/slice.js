import { createSlice } from "@reduxjs/toolkit";

const favoritesCarSlice = createSlice({
  name: "favoriteCar",
  initialState: {
    items: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      if (!state.items.includes(action.payload)) {
        state.items.push(action.payload);
      }
    },
    removeFavorite: (state, action) => {
      state.items = state.items.filter((id) => id !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesCarSlice.actions;
export default favoritesCarSlice.reducer;
