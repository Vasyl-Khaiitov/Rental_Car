import css from "./CarList.module.css";
import { useDispatch, useSelector } from "react-redux";
import CarCard from "../CarCard/CarCard";
import { useEffect, useRef } from "react";
import {
  selectCarFilters,
  selectCarItems,
  selectCarPage,
  selectHasFetched,
  selectIsLoading,
  selectTotalPage,
} from "../../../redux/car/selectors";
import { fetchCars } from "../../../redux/car/operation";
import ButtonUp from "../../../common/ButtonUp/ButtonUp";
import Button from "../../../common/Button/Button";
import { setFilters, setPage } from "../../../redux/car/slice";
import { isActiveFilter } from "../../../utils/activFilterUtils";
import Loader from "../../Loader/Loader";

export default function CarList() {
  const dispatch = useDispatch();
  const scrollPositionRef = useRef(0);
  const prevLengthRef = useRef(0);

  const filters = useSelector(selectCarFilters);
  const isFiltered = isActiveFilter(filters);
  const cars = useSelector(selectCarItems);
  const page = useSelector(selectCarPage);
  const totalPages = useSelector(selectTotalPage);
  const isLoading = useSelector(selectIsLoading);
  const hasFetched = useSelector(selectHasFetched);

  useEffect(() => {
    const payload = isFiltered ? { ...filters, page } : { page };
    dispatch(fetchCars(payload));
  }, [dispatch, page, filters, isFiltered]);

  useEffect(() => {
    const prevLength = prevLengthRef.current;
    const currentLength = cars.length;

    if (hasFetched && scrollPositionRef.current && currentLength > prevLength) {
      window.scrollTo({
        top: scrollPositionRef.current,
        behavior: "auto",
      });
    }

    prevLengthRef.current = currentLength;
  }, [cars, hasFetched]);

  const handleLoadMore = () => {
    if (!isLoading) {
      scrollPositionRef.current = window.scrollY;
      dispatch(setPage(page + 1));
    }
  };

  const handleResetFilters = () => {
    dispatch(
      setFilters({
        brand: "",
        rentalPrice: "",
        mileageFrom: "",
        mileageTo: "",
      })
    );
    dispatch(setPage(1));
  };

  return (
    <>
      {isLoading && !hasFetched ? (
        <div className={css.loader_wrapper}>
          <Loader size={32} />
        </div>
      ) : (
        <>
          {cars.length === 0 && hasFetched && (
            <div className={css.no_results}>
              <p className={css.text_notFound}>
                No cars found matching your criteria.
              </p>
              <Button
                type="button"
                name="Reset filters"
                className={css.btn_reset}
                styleType="white"
                onClick={handleResetFilters}
                paddingsX={24}
              />
            </div>
          )}

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
              name={
                isLoading && hasFetched ? (
                  <div className={css.loader_in_button}>
                    <Loader size={12} />
                  </div>
                ) : (
                  "Load more"
                )
              }
              paddingsX={38}
              className={css.btn_loadMore}
              styleType="white"
              onClick={handleLoadMore}
              disabled={isLoading && hasFetched}
            />
          )}

          <ButtonUp />
        </>
      )}
    </>
  );
}
