export const isActiveFilter = (filters) =>
  filters.brand ||
  filters.rentalPrice ||
  filters.mileageFrom ||
  filters.mileageTo;
