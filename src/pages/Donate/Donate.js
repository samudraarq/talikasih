import React from "react";
import { useFormik } from "formik";
import Payments from "../../components/Payments/Payments";
import Information from "../../components/Information/Information";

const initialValues = {
  amount: "",
  name: "",
  anonym: false,
  message: "",
  number: "",
  date: "",
  cvv: "",
};

const onSubmit = (values) => {
  console.log("Form data", values);
};

const validate = (values) => {
  let errors = {};

  if (!values.amount) {
    errors.amount = "required";
  } else if (
    "^$?d{1,2},d{3}?,d{3}?(.(d{2}))$|^$?d{1,3}?,d{3}?(.(d{2}))$|^$?d{1,3}?(.(d{2}))$"
  ) {
    errors.amount = "Invalid amount of money";
  }
  if (!values.name) {
    errors.name = "required";
  }
  if (!values.number) {
    errors.number = "required";
  } else if ("^4[0-9]{12}(?:[0-9]{3})?$") {
    errors.number = "Invalid credit card number";
  }
  if (!values.date) {
    errors.date = "required";
  } else if ("^((0[1-9])|(1[0-2]))/(d{2})$") {
    errors.date = "YourcCredit card has expired";
  }
  if (!values.cvv) {
    errors.cvv = "required";
  } else if ("^[0-9]{3, 4}$") {
    errors.cvv = "Invalid CVV";
  }

  return errors;
};

function Donate() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  console.log("Formik errors", formik.errors);

  return (
    <>
      <div>
        <Information
          handleChange={formik.handleChange}
          formik={formik.values}
          validate={formik.errors}
        />
        <Payments
          handleChange={formik.handleChange}
          formik={formik.values}
          onSubmit={formik.handleSubmit}
          validate={formik.errors}
        />
      </div>
    </>
  );
}

export default Donate;
