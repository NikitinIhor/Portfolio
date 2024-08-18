import { useId, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Loader from "../Loader/Loader";
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

export default function FeedbackForm({ closeAddModal }) {
  const id = useId();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values, actions) => {
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      actions.resetForm();
      closeAddModal();
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div className={css.container}>
          <label htmlFor={`username-${id}`}>Your name</label>
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
            rows="3"
          />
          <ErrorMessage className={css.error} name="message" component="span" />
        </div>
        <div className={css.btns}>
          <button
            disabled={loading}
            onClick={closeAddModal}
            type="button"
            className={css.btn}
          >
            Cencel
          </button>
          <button disabled={loading} className={css.btn} type="submit">
            Send
            {loading && (
              <div className={css.loader}>
                <Loader />
              </div>
            )}
          </button>
        </div>
      </Form>
    </Formik>
  );
}
