import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../service/api";

export const fetchCarBrands = createAsyncThunk(
  "cars/fetchCarBrands",
  async (_, thunkAPI) => {
    try {
      const res = await apiClient.get("/brands");
      return res.data;
    } catch (error) {}
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
);
