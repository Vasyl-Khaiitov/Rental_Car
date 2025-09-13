import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../service/api";

export const fetchCars = createAsyncThunk(
  "cars/fetchAllCars",
  async ({ page = 1, limit = 12 }, thunkAPI) => {
    try {
      const res = await apiClient.get("/cars", {
        params: {
          page,
          limit,
        },
      });
      const { cars, totalPages, totalCars } = res.data;

      return {
        cars,
        page,
        totalPages,
        totalCars,
      };
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const fetchCarById = createAsyncThunk(
  "cars/fetchCarById",
  async (id, thunkAPI) => {
    try {
      const res = await apiClient.get(`/cars/${id}`);

      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);
