import React from "react";
import { useForm } from "react-hook-form";
import styles from "../Modal/FormLogin.module.css";
import google from "../../assets/homepage/Home/google.png";

export default function FormLogin(props) {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(watch("example"));

  return (
    <div className={styles.container}>
      <h1 className={styles.headerForm}>LOGIN</h1>
      <h3 className={styles.createAccount}>
        New user?{" "}
        <a href="#" onClick={() => props.setIsLogin(false)}>
          Create account
        </a>
      </h3>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
        <input
          className={styles.inputForm}
          type="text"
          placeholder="Email"
          name="email"
          ref={register({ required: true })}
        />
        {errors.email && (
          <span className={styles.errorMessage}>Email is required</span>
        )}

        <input
          className={styles.inputForm}
          type="password"
          placeholder="Password"
          name="password"
          ref={register({
            required: "Required password",
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

        <a href="#" className={styles.forgotPass}>
          forgot password?
        </a>

        <button className={styles.btnLogin} type="submit">
          LOGIN
        </button>
      </form>
      <button className={styles.btnGoogle}>
        <img src={google} alt="google" className={styles.google} />
        Continue with Google
      </button>
    </div>
  );
}
