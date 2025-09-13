export const selectCarItems = (state) => state.cars.items;
export const selectIsLoading = (state) => state.cars.isLoading;
export const selectCarsError = (state) => state.cars.error;
export const selectCarPage = (state) => state.cars.page;
export const selectTotalPage = (state) => state.cars.totalPages;
export const selectTotalCars = (state) => state.cars.totalCars;
export const selectCurrentCar = (state) => state.cars.currentCar;
export const selectHasFetched = (state) => state.cars.hasFetched;
