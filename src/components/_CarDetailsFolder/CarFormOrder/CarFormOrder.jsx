import { Field, Formik, Form, ErrorMessage } from "formik";
import Button from "../../../common/Button/Button";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const handleSubmit = (values, actions) => {
    console.log(values);
    toast.success("Booking submitted successfully!");
    actions.resetForm();
  };

  return (
    <section>
      <h2>Book your car now</h2>
      <p>Stay connected! We are always ready to help you.</p>
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form>
            <Field type="text" name="username" placeholder="Name*" />
            <ErrorMessage name="username" component="div" className="error" />
            <Field type="text" name="email" placeholder="Email*" />
            <ErrorMessage name="email" component="div" className="error" />
            <Field type="date" name="calendar" placeholder="Booking date" />
            <ErrorMessage name="calendar" component="div" className="error" />
            <Field as="textarea" name="area" placeholder="Comment" />
            <ErrorMessage name="area" component="div" className="error" />
            <Button type="submit" name="Send" paddingsX={58} />
          </Form>
        </Formik>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </section>
  );
}
