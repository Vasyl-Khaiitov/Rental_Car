import css from "./Filter.module.css";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import Button from "../../common/Button/Button";
import SelectInput from "../SelectInput/SelectInput";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../redux/car/slice";
import { fetchCars } from "../../redux/car/operation";
import { selectBrands } from "../../redux/brands/selectors";
import { useEffect } from "react";
import { fetchCarBrands } from "../../redux/brands/operation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialValues = {
  brand: "",
  rentalPrice: "",
  mileageFrom: "",
  mileageTo: "",
};

const validationSchema = Yup.object({
  mileageFrom: Yup.string()
    .nullable()
    .notRequired()
    .matches(/^\d+$/, "Please enter digits only"),

  mileageTo: Yup.string()
    .nullable()
    .notRequired()
    .matches(/^\d+$/, "Please enter digits only"),
});

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
    const { brand, rentalPrice, mileageFrom, mileageTo } = values;

    const isAllEmpty =
      !brand.trim() &&
      !rentalPrice.trim() &&
      !mileageFrom.trim() &&
      !mileageTo.trim();

    if (isAllEmpty) {
      toast.warning("Please fill in at least one field before searching");
      return;
    }

    const filters = {
      brand,
      rentalPrice,
      mileageFrom,
      mileageTo,
      page: 1,
      limit: 12,
    };

    dispatch(setFilters(filters));
    dispatch(fetchCars(filters));
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
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
          <div className={css.mileage_roup}>
            <label htmlFor="mileageFrom" className={css.mileage_label}>
              Car mileage/km
            </label>
            <div className={css.mileage_inputs}>
              <Field
                type="text"
                name="mileageFrom"
                id="mileageFrom"
                placeholder="From"
                inputMode="numeric"
                pattern="[0-9]*"
                className={css.input_mileage}
              />
              <Field
                type="text"
                name="mileageTo"
                id="mileageTo"
                placeholder="To"
                inputMode="numeric"
                pattern="[0-9]*"
                className={`${css.input_mileage} ${css.input_mileage_right}`}
              />
            </div>
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
