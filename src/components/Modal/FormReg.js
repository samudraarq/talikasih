import React from "react";
import { useForm } from "react-hook-form";
import styles from "./FormReg.module.css";
import google from "../../assets/homepage/Home/google.png";

export default function FormReg(props) {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(watch("example"));

  return (
    <>
      <h1 className={styles.headerForm}>REGISTER</h1>
      <h3 className={styles.alreadyHave}>
        Already have an account
        <a href="#" onClick={() => props.setIsLogin(true)}>
          Sign in
        </a>
      </h3>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
        <input
          className={styles.inputForm}
          type="text"
          placeholder="Name"
          name="name"
          ref={register({ required: true })}
        />
        {errors.email && (
          <span className={styles.errorMessage}>Your name is required</span>
        )}

        <input
          className={styles.inputForm2}
          type="text"
          placeholder="Email"
          name="email"
          ref={register({ required: true })}
        />
        {errors.email && (
          <span className={styles.errorMessage}>Email is required</span>
        )}

        <input
          className={styles.inputForm2}
          type="password"
          placeholder="Password"
          name="password"
          ref={register({
            required: "required password",
            minLength: { value: 8, message: "Password must be 8 characters" },
            validate: (value) => {
              return (
                [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every((pattern) =>
                  pattern.test(value)
                ) || "must include lower, upper, number and special character"
              );
            },
          })}
        />
        {errors.password && (
          <span className={styles.errorMessage}>{errors.password.message}</span>
        )}

        <input
          className={styles.inputForm2}
          type="password"
          placeholder="Confirm Password"
          name="confirmpassword"
          ref={register({
            required: "Confirm password is required",
            // minLength: { value: 8, message: "Password doesn't match" },
            validate: (value) => {
              return value === watch("password");
            },
          })}
        />
        {errors.confirmpassword && (
          <span className={styles.errorMessage}>
            {errors.confirmpassword.message}
          </span>
        )}
        {errors.confirmpassword?.type === "validate" && (
          <span className={styles.errorMessage}>Password doesn't match</span>
        )}

        <button className={styles.btnLogin} type="submit">
          LOGIN
        </button>
      </form>
      <hr className={styles.line1} />
      <button className={styles.btnGoogle}>
        <img src={google} alt="google" className={styles.google} />
        Continue with Google
      </button>
      <hr className={styles.line2} />
    </>
  );
}
