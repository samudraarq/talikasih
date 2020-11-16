import React from "react";
import { connect } from "react-redux";
import qs from "qs";
import { useForm } from "react-hook-form";
import styles from "../Modal/FormLogin.module.css";
import { setLogin } from "../../redux/actions/authActions";
import { setFormRegister } from "../../redux/actions/layoutActions";
// import google from "../../assets/homepage/Home/google.png";

function FormLogin(props) {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    const dataQs = qs.stringify(data);
    props.setLogin(dataQs);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.headerForm}>LOGIN</h1>
      <h3 className={styles.createAccount}>
        New user?{" "}
        <span onClick={() => props.setFormRegister()}>Create account</span>
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

        {/* <span className={styles.forgotPass}>forgot password?</span> */}

        <button className={styles.btnLogin} type="submit">
          {props.auth.isLoading ? "LOGGING IN..." : "LOGIN"}
        </button>
        {props.auth.isError && (
          <p className={styles.errorMessageAuth}>{props.auth.errorMsg}</p>
        )}
      </form>
      {/* <button className={styles.btnGoogle} onClick={props.googleSignin}>
        <img src={google} alt="google" className={styles.google} />
        Continue with Google
      </button> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLogin: (dataQs) => dispatch(setLogin(dataQs)),
    setFormRegister: () => {
      dispatch(setFormRegister());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);
