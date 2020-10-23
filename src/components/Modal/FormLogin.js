import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import qs from "qs";
import { useForm } from "react-hook-form";
import styles from "../Modal/FormLogin.module.css";
import { setUsertokenFromLogin } from "../../redux/actions/authActions";
import google from "../../assets/homepage/Home/google.png";

function FormLogin(props) {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    const dataQs = qs.stringify(data);
    axios
      .post("https://warm-tundra-23736.herokuapp.com/login", dataQs)
      .then(function (response) {
        console.log(response.data);
        props.setUsertokenFromLogin(response.data);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };

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
            // minLength: { value: 8, message: "Password must be 8 characters" },
            // validate: (value) => {
            //   return (
            //     [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every((pattern) =>
            //       pattern.test(value)
            //     ) || "must include lower, upper, number and special character"
            //   );
            // },
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

const mapDispathToProps = (dispatch) => {
  return {
    setUsertokenFromLogin: (token) => dispatch(setUsertokenFromLogin(token)),
  };
};

export default connect(null, mapDispathToProps)(FormLogin);
