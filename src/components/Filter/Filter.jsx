import css from "./Filter.module.css";
import { Field, Form, Formik } from "formik";
import Button from "../../common/Button/Button";
import SelectInput from "../../SelectInput/SelectInput";

const initialValues = {
  brand: "",
  price: "",
  mileageFrom: "",
  mileageTo: "",
};

const handleSubmit = (values, actions) => {
  console.log(values);
  actions.resetForm();
};

export default function Filter() {
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <SelectInput
            name="brand"
            className={css.select_brand}
            labelText="Car brand"
            placeholder="Choose a brand"
          />
          <SelectInput
            name="price"
            className={css.select_price}
            labelText="Price/1 hour"
            placeholder="Choose a price"
          />
          <div className={css.mileageGroup}>
            <label htmlFor="mileageFrom">Car mileage/km</label>
            <Field
              type="number"
              name="mileageFrom"
              id="mileageFrom"
              placeholder="From"
            />

            <Field type="number" name="mileageTo" placeholder="To" />
          </div>
          <Button type="submit" name="Search" paddingsY={12} paddingsX={51} />
        </Form>
      </Formik>
    </div>
  );
}
