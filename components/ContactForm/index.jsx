import React, { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import styles from "./ContactForm.module.scss";

const formSchema = yup.object().shape({
  name: yup.string().required("Du måste fylla i ditt namn"),
  email: yup
    .string()
    .email()
    .typeError("Det måste vara en emailadress")
    .required("Du måste fylla i din emailadress"),
  phone: yup.number().positive().integer().typeError("Du måste skriva in ett nummer").notRequired(),
  message: yup.string().required("Du måste skriva ett meddelande"),
});

export default function ContactForm({ email }) {
  const [serverState, setServerState] = useState();
  const handleServerResponse = (ok, msg) => {
    setServerState({ ok, msg });
  };
  const handleOnSubmit = (values, actions) => {
    axios({
      method: "POST",
      url: "https://formspree.io/f/xpzovdqb",
      data: values,
    })
      .then(response => {
        actions.setSubmitting(false);
        actions.resetForm();
        handleServerResponse(true, "Ditt meddelande är nu skickat, vi hör av oss så snart vi kan.");
      })
      .catch(error => {
        actions.setSubmitting(false);
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <Formik
      initialValues={{ name: "", phone: "", email: "", message: "" }}
      onSubmit={handleOnSubmit}
      validationSchema={formSchema}
    >
      {({ isSubmitting }) => (
        <Form id="fs-frm" noValidate className={styles.form}>
          <Field id="name" type="name" name="name" placeholder="Namn" />
          <ErrorMessage name="name" className="errorMsg" component="p" />
          <Field id="email" type="email" name="email" placeholder="Email" />
          <ErrorMessage name="email" className="errorMsg" component="p" />
          <Field id="phone" type="phone" name="phone" placeholder="Telefonnummer" />
          <Field id="message" name="message" component="textarea" placeholder="Meddelande" />
          <ErrorMessage name="message" className="errorMsg" component="p" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
          {serverState && (
            <p className={!serverState.ok ? "Något gick fel, försök igen." : ""}>
              {serverState.msg}
            </p>
          )}
        </Form>
      )}
    </Formik>
  );
}
