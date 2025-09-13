import { createSlice } from "@reduxjs/toolkit";
import { fetchCarBrands } from "./operation";
import { handleError, handlePending } from "../../utils/reduxUtils";

const brandsSlice = createSlice({
  name: "brands",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarBrands.pending, handlePending)
      .addCase(fetchCarBrands.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
        state.error = null;
      })
      .addCase(fetchCarBrands.rejected, handleError);
  },
});

export default brandsSlice.reducer;
