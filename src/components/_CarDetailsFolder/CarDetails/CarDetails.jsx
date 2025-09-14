import { useDispatch, useSelector } from "react-redux";
import CarDescription from "../CarDescription/CarDescription";
import CarFromOrder from "../CarFormOrder/CarFormOrder";
import { useParams } from "react-router-dom";
import {
  selectCurrentCar,
  selectIsLoading,
} from "../../../redux/car/selectors";
import { useEffect } from "react";
import { fetchCarById } from "../../../redux/car/operation";
import Loader from "../../Loader/Loader";

export default function CarDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const car = useSelector(selectCurrentCar);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchCarById(id));
  }, [dispatch, id]);

  return (
    <>
      {isLoading ? (
        <Loader size={32} />
      ) : (
        <CarDescription car={car}>
          <CarFromOrder />
        </CarDescription>
      )}
    </>
  );
}
