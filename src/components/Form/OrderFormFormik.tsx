import { Formik, Form, Field } from "formik";
import type { FormikHelpers } from "formik";
import { useId } from "react";
import css from "./OrderFormFormik.module.css";
import * as Yup from "yup";

interface OrderFormValues {
  username: string;
  email: string;
  deliveryTime: string;
  delivery: string;
  restrictions: string[];
  message: string;
}

const initialValues: OrderFormValues = {
  username: "your name",
  email: "your email",
  deliveryTime: "",
  delivery: "pickup",
  restrictions: [],
  message: "Live your comment...",
};

const OrderFormSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(30, "Name is too long")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  deliveryTime: Yup.string().required("Delivery time is required"),
});

export default function OrderFormFormik() {
  const fieldId = useId();

  const handleSubmit = (
    values: OrderFormValues,
    actions: FormikHelpers<OrderFormValues>
  ) => {
    console.log("Order data:", values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={OrderFormSchema}
    >
      <Form className={css.form}>
        <fieldset className={css.fieldset}>
          <legend className={css.legend}>Client info</legend>
          <label htmlFor={`${fieldId}-username`} className={css.label}>
            Name
          </label>
          <Field
            type="text"
            name="username"
            id={`${fieldId}-username`}
            className={css.field}
          />
          <label htmlFor={`${fieldId}-email`} className={css.label}>
            Email
          </label>
          <Field
            type="email"
            name="email"
            id={`${fieldId}-email`}
            className={css.field}
          />

          <label htmlFor={`${fieldId}-deliveryTime`}>
            Prefered delivery time
          </label>
          <Field as="select" id={`${fieldId}-deliveryTime`} name="deliveryTime">
            <option value="">-- Choose delivery time --</option>
            <option value="morning">Morning (8:00 - 12:00)</option>
            <option value="afternoon">Afternoon (12:00 - 16:00)</option>
            <option value="evening">Evening (16:00 - 20:00)</option>
          </Field>

          <label>
            <Field type="radio" name="delivery" value="pickup" />
            Pickup
          </label>
          <label>
            <Field type="radio" name="delivery" value="courier" />
            Courier
          </label>
          <label>
            <Field type="radio" name="delivery" value="drone" />
            Drone delivery
          </label>

          <label>
            <Field type="checkbox" value="vegan" name="restrictions" />
            Vegan
          </label>
          <label>
            <Field type="checkbox" value="gluten-free" name="restrictions" />
            Gluten-free
          </label>
          <label>
            <Field type="checkbox" value="Nut-free" name="restrictions" />
            Nut-free
          </label>

          <label htmlFor="message">Comment or instructions</label>
          <Field as="textarea" name="message" id="message" />
        </fieldset>

        <button type="submit" className={css.btn}>
          Place order
        </button>
      </Form>
    </Formik>
  );
}
