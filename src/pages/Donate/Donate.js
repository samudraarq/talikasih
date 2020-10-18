import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
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

const submitForm = ({ values, setSubmitting }) => {
  setTimeout(() => {
    console.log("Form data", values);
  }, 500);
};

const validationSchema = Yup.object({
  amount: Yup.string().required("required"),
  name: Yup.string().required("required"),
  number: Yup.string().max(16).required("required"),
  date: Yup.string()
    .typeError("Not a valid expiration date. Example: MM/YY")
    .matches(
      /([0-9]{2})\/([0-9]{2})/,
      "Not a valid expiration date. Example: MM/YY"
    )
    .required("required"),
  cvv: Yup.string().max(3).required("required"),
});

function Donate() {
  const formik = useFormik({
    initialValues,
    submitForm,
    validationSchema,
  });

  // console.log("Formik errors", formik.errors);

  return (
    <>
      <div>
        <Information
          handleChange={formik.handleChange}
          formik={formik.values}
          onBlur={formik.handleBlur}
          validationSchema={formik.errors}
          onTouched={formik.touched}
        />
        <Payments
          handleChange={formik.handleChange}
          formik={formik.values}
          submitForm={formik.handleSubmit}
          onBlur={formik.handleBlur}
          validationSchema={formik.errors}
          onTouched={formik.touched}
          setSubmitting={formik.setSubmitting}
        />
      </div>
    </>
  );
}

export default Donate;
