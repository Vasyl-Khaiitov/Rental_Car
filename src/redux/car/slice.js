import { createSlice } from "@reduxjs/toolkit";
import { fetchCarById, fetchCars } from "./operation";
import { handleError, handlePending } from "../../utils/reduxUtils";

const carSlice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    page: 1,
    totalPages: 0,
    totalCars: 12,
    isLoading: false,
    error: null,
    currentCar: null,
    hasFetched: false,
  },
  reducers: {
    setPage: (state, { payload }) => {
      state.page = payload;
      state.hasFetched = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.fulfilled, (state, { payload }) => {
        state.items =
          payload.page === 1 ? payload.cars : [...state.items, ...payload.cars];
        state.hasFetched = true;
        state.page = payload.page;
        state.totalPages = payload.totalPages;
        state.totalCars = payload.totalCars;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchCars.rejected, handleError)
      .addCase(fetchCarById.pending, handlePending)
      .addCase(fetchCarById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.currentCar = payload;
        state.error = null;
      })
      .addCase(fetchCarById.rejected, handleError);
  },
});

export const { setPage } = carSlice.actions;
export default carSlice.reducer;
