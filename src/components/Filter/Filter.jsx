import css from "./Filter.module.css";
import { Field, Form, Formik } from "formik";
import Button from "../../common/Button/Button";
import SelectInput from "../SelectInput/SelectInput";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../redux/car/slice"; // 👈 оновлено
import { fetchCars } from "../../redux/car/operation"; // 👈 оновлено
import { selectBrands } from "../../redux/brands/selectors";
import { useEffect } from "react";
import { fetchCarBrands } from "../../redux/brands/operation";

const initialValues = {
  brand: "",
  rentalPrice: "",
  mileageFrom: "",
  mileageTo: "",
};

export default function Filter() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarBrands());
  }, [dispatch]);

  const priceOptions = [
    { _id: "30", name: "$30" },
    { _id: "40", name: "$40" },
    { _id: "50", name: "$50" },
    { _id: "60", name: "$60" },
    { _id: "70", name: "$70" },
    { _id: "80", name: "$80" },
    { _id: "90", name: "$90" },
    { _id: "100", name: "$100" },
    { _id: "110", name: "$110" },
    { _id: "120", name: "$120" },
    { _id: "130", name: "$130" },
    { _id: "140", name: "$140" },
    { _id: "150", name: "$150" },
    { _id: "200", name: "$200" },
  ];

  const brands = useSelector(selectBrands);
  const brandOptions = brands.map((brand) => ({
    _id: brand,
    name: brand,
  }));

  const handleSubmit = (values, actions) => {
    const filters = {
      brand: values.brand,
      rentalPrice: values.rentalPrice,
      mileageFrom: values.mileageFrom,
      mileageTo: values.mileageTo,
      page: 1,
      limit: 12,
    };

    dispatch(setFilters(filters));
    dispatch(fetchCars(filters));
    actions.resetForm();
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <SelectInput
            name="brand"
            className={css.select_brand}
            labelText="Car brand"
            placeholder="Choose a brand"
            options={brandOptions}
          />
          <SelectInput
            name="rentalPrice"
            className={css.select_price}
            labelText="Price/1 hour"
            placeholder="Choose a price"
            options={priceOptions}
          />
          <div className={css.mileageGroup}>
            <label htmlFor="mileageFrom">Car mileage/km</label>
            <Field
              type="number"
              name="mileageFrom"
              id="mileageFrom"
              placeholder="From"
            />
            <Field
              type="number"
              id="mileageTo"
              name="mileageTo"
              placeholder="To"
            />
          </div>
          <Button
            type="submit"
            name="Search"
            paddingsX={51}
            className={css.btn_srch}
          />
        </Form>
      </Formik>
    </div>
  );
}
