import React from "react";
import { Formik } from "formik";
import { Card } from "../models/card.model";
import FormTextInput from "./FormTextInput";
import FormCheckboxInput from "./FormCheckboxInput";

const CardForm = ({ onSubmit, values }: { onSubmit: any; values: Card }) => (
  <div>
    <Formik
      initialValues={{
        ...values,
      }}
      onSubmit={onSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <FormTextInput
            name="cardName"
            label="Name"
            value={values.cardName}
            handleChange={handleChange}
            handleBlur={handleBlur}
          ></FormTextInput>
          <FormTextInput
            name="cardNumber"
            label="Card Number"
            value={values.cardNumber}
            handleChange={handleChange}
            handleBlur={handleBlur}
          ></FormTextInput>
          <FormTextInput
            name="year"
            label="Year"
            value={values.year}
            handleChange={handleChange}
            handleBlur={handleBlur}
          ></FormTextInput>
          <FormCheckboxInput
            label="Rookie?"
            value={values.rookie}
            handleChange={handleChange}
            handleBlur={handleBlur}
          ></FormCheckboxInput>
          <FormCheckboxInput
            label="Autographed?"
            value={values.autographed}
            handleChange={handleChange}
            handleBlur={handleBlur}
          ></FormCheckboxInput>
          <FormCheckboxInput
            label="Relic?"
            value={values.relic}
            handleChange={handleChange}
            handleBlur={handleBlur}
          ></FormCheckboxInput>
          <FormTextInput
            name="variation"
            label="Variation"
            value={values.variation}
            handleChange={handleChange}
            handleBlur={handleBlur}
          ></FormTextInput>
          <FormTextInput
            name="notes"
            label="Notes"
            value={values.notes}
            handleChange={handleChange}
            handleBlur={handleBlur}
          ></FormTextInput>
          <FormCheckboxInput
            label="Graded?"
            value={values.graded}
            handleChange={handleChange}
            handleBlur={handleBlur}
          ></FormCheckboxInput>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default CardForm;
