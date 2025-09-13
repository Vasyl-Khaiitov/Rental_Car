import { useDispatch, useSelector } from "react-redux";
import CarDescription from "../CarDescription/CarDescription";
import CarFromOrder from "../CarFormOrder/CarFormOrder";
import { useParams } from "react-router-dom";
import { selectCurrentCar } from "../../../redux/car/selectors";
import { useEffect } from "react";
import { fetchCarById } from "../../../redux/car/operation";

export default function CarDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const car = useSelector(selectCurrentCar);

  useEffect(() => {
    dispatch(fetchCarById(id));
  }, [dispatch, id]);

  return (
    <>
      <CarDescription car={car} />
      <CarFromOrder />
    </>
  );
}
