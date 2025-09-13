export const selectCarItems = (state) => state.cars.items;
export const selectCarPage = (state) => state.cars.page;
export const selectTotalPage = (state) => state.cars.totalPages;
export const selectTotalCars = (state) => state.cars.totalCars;
export const selectIsLoading = (state) => state.cars.isLoading;
export const selectHasFetched = (state) => state.cars.hasFetched;
export const selectCurrentCar = (state) => state.cars.currentCar;
export const selectCarError = (state) => state.cars.error;
export const selectCarFilters = (state) => state.cars.filters; // ✅ ось він!
