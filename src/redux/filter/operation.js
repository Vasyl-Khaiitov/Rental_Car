export const fetchCars = createAsyncThunk(
  "cars/fetchFilterCars",
  async (
    { page = 1, limit = 12, brand, rentalPrice, minMileage, maxMileage } = {},
    thunkAPI
  ) => {
    try {
      const res = await apiClient.get("/cars", {
        params: {
          page,
          limit,
          brand,
          rentalPrice,
          minMileage,
          maxMileage,
        },
      });

      const { cars, totalCars, totalPages } = res.data;

      return {
        cars,
        page,
        totalCars,
        totalPages,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
