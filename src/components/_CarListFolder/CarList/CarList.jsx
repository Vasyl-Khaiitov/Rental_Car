import css from "./CarList.module.css";
import { useDispatch, useSelector } from "react-redux";
import CarCard from "../CarCard/CarCard";
import { useEffect } from "react";
import {
  selectCarItems,
  selectCarPage,
  selectHasFetched,
  selectIsLoading,
  selectTotalPage,
} from "../../../redux/car/selectors";
import { fetchCars } from "../../../redux/car/operation";
import ButtonUp from "../../../common/ButtonUp/ButtonUp";
import Button from "../../../common/Button/Button";
import { setPage } from "../../../redux/car/slice";

export default function CarList() {
  const dispatch = useDispatch();

  const cars = useSelector(selectCarItems);
  const page = useSelector(selectCarPage);
  const totalPages = useSelector(selectTotalPage);
  const isLoading = useSelector(selectIsLoading);
  const hasFetched = useSelector(selectHasFetched);

  useEffect(() => {
    if (!hasFetched) {
      dispatch(fetchCars({ page }));
    }
  }, [dispatch, page]);

  const handleLoadMore = () => {
    if (!isLoading) {
      const nextPage = page + 1;
      dispatch(setPage(nextPage));
    }
  };

  return (
    <>
      <ul className={css.car_list}>
        {cars.map((car) => (
          <li key={car.id} className={css.list_items}>
            <CarCard
              id={car.id}
              img={car.img}
              brand={car.brand}
              model={car.model}
              year={car.year}
              type={car.type}
              price={car.rentalPrice}
              company={car.rentalCompany}
              address={car.address}
              mileage={car.mileage}
            />
          </li>
        ))}
      </ul>

      {page < totalPages && (
        <Button
          type="button"
          name="Load more"
          paddingsX={38}
          className={css.btn_loadMore}
          styleType="white"
          onClick={handleLoadMore}
        />
      )}

      <ButtonUp />
    </>
  );
}
