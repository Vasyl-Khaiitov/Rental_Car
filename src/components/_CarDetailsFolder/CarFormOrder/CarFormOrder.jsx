import css from "./CarFormOrder.module.css";
import { Field, Formik, Form } from "formik";
import Button from "../../../common/Button/Button";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../Loader/Loader";

const validationSchema = Yup.object({
  username: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  calendar: Yup.date().required("Date is required"),
  area: Yup.string(),
});

export default function CarFromOrder() {
  const initialValues = {
    username: "",
    email: "",
    calendar: "",
    area: "",
  };

  const handleSubmit = async (values, actions) => {
    try {
      toast.success("Booking submitted successfully!");
      actions.resetForm();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      actions.setSubmitting(false);
    }
  };
  return (
    <section className={css.section_order}>
      <h2 className={css.title_order}>Book your car now</h2>
      <p className={css.text_order}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ submitForm, isSubmitting }) => (
          <>
            <Form className={css.form_order}>
              <Field name="username">
                {({ field, meta }) => (
                  <>
                    <input
                      {...field}
                      type="text"
                      placeholder="Name*"
                      className={`${css.input_order} ${
                        meta.touched && meta.error ? css.input_error : ""
                      }`}
                    />
                    {meta.touched && meta.error && (
                      <div className={css.error}>{meta.error}</div>
                    )}
                  </>
                )}
              </Field>

              <Field name="email">
                {({ field, meta }) => (
                  <>
                    <input
                      {...field}
                      type="text"
                      placeholder="Email*"
                      className={`${css.input_order} ${
                        meta.touched && meta.error ? css.input_error : ""
                      }`}
                    />
                    {meta.touched && meta.error && (
                      <div className={css.error}>{meta.error}</div>
                    )}
                  </>
                )}
              </Field>

              <Field name="calendar">
                {({ field, meta }) => (
                  <>
                    <input
                      {...field}
                      type="date"
                      placeholder="Booking date"
                      className={`${css.input_order} ${
                        meta.touched && meta.error ? css.input_error : ""
                      }`}
                    />
                    {meta.touched && meta.error && (
                      <div className={css.error}>{meta.error}</div>
                    )}
                  </>
                )}
              </Field>

              <Field name="area">
                {({ field, meta }) => (
                  <>
                    <textarea
                      {...field}
                      placeholder="Comment"
                      className={`${css.input_order} ${css.input_area} ${
                        meta.touched && meta.error ? css.input_error : ""
                      }`}
                    />
                    {meta.touched && meta.error && (
                      <div className={css.error}>{meta.error}</div>
                    )}
                  </>
                )}
              </Field>
            </Form>

            <Button
              type="submit"
              name={
                isSubmitting ? (
                  <div className={css.loader_wrapper}>
                    <Loader size={12} />
                  </div>
                ) : (
                  "Send"
                )
              }
              paddingsX={58}
              onClick={submitForm}
              className={css.btn_order}
              disabled={isSubmitting}
            />
          </>
        )}
      </Formik>
    </section>
  );
}
