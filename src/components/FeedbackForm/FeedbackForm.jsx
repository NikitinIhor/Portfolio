import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./FeedbackForm.module.css";

const initialValues = {
  username: "",
  email: "",
  message: "",
};

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Must be a valid email!").required("Required"),
  message: Yup.string()
    .min(3, "Too short")
    .max(256, "Too long")
    .required("Required"),
});

export default function FeedbackForm() {
  const id = useId();
  const handleSubmit = (values, actions) => {
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div className={css.container}>
          <label htmlFor={`username-${id}`}>Username</label>
          <Field
            className={css.field}
            type="text"
            name="username"
            id={`username-${id}`}
          />
          <ErrorMessage
            className={css.error}
            name="username"
            component="span"
          />
        </div>

        <div className={css.container}>
          <label htmlFor={`email-${id}`}>Email</label>
          <Field
            className={css.field}
            type="email"
            name="email"
            id={`email-${id}`}
          />
          <ErrorMessage className={css.error} name="email" component="span" />
        </div>

        <div className={css.container}>
          <label htmlFor={`message-${id}`}>Message</label>
          <Field
            className={css.field}
            as="textarea"
            name="message"
            id={`message-${id}`}
            rows="5"
          />
          <ErrorMessage className={css.error} name="message" component="span" />
        </div>

        <button className={css.btn} type="submit">
          Submit
        </button>
        <button className={css.btn}>Cencel</button>
      </Form>
    </Formik>
  );
}
