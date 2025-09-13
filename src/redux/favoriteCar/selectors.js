export const selectIsFavoriteById = (id) => (state) =>
  Array.isArray(state.favoriteCar?.items) &&
  state.favoriteCar.items.includes(id);
