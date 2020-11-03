import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";

import styles from "./EditProfileForm.module.css";

import spinner from "../../../../assets/general/spinner.svg";

const EditProfileForm = ({ auth, onSubmit }) => {
  const [resetPass, setResetPass] = useState(false);

  const { register, handleSubmit, watch, errors } = useForm({
    mode: "onTouched",
  });

  const userName = auth.user?.name;
  const userEmail = auth.user?.email;
  const userBankName = auth.user?.bank_name;
  const userBankAccount = auth.user?.bank_account;

  return (
    <form className={styles.inputsContainer} onSubmit={handleSubmit(onSubmit)}>
      <div
        className={`${styles.inputContainer} ${errors.name && styles.error}`}
      >
        <label htmlFor="name">
          Name<span className={styles.star}>*</span>
        </label>
        <input
          type="text"
          name="name"
          defaultValue={userName}
          ref={register({ required: true })}
        />
        {errors.name && (
          <span className={styles.errorText}>This field is required</span>
        )}
      </div>
      <div
        className={`${styles.inputContainer} ${errors.email && styles.error}`}
      >
        <label htmlFor="email">
          Email<span className={styles.star}>*</span>
        </label>
        <input
          type="email"
          name="email"
          defaultValue={userEmail}
          ref={register({ required: true })}
        />
        {errors.email && (
          <span className={styles.errorText}>This field is required</span>
        )}
      </div>
      {!resetPass && (
        <p className={styles.resetPass} onClick={() => setResetPass(true)}>
          Reset password
        </p>
      )}
      {resetPass && (
        <>
          <div
            className={`${styles.inputContainer} ${
              errors.pass && styles.error
            }`}
          >
            <label htmlFor="pass">
              New Password<span className={styles.star}>*</span>
            </label>
            <input
              type="password"
              name="password"
              ref={register({ required: true, minLength: 6 })}
            />
            {errors.password?.type === "required" && (
              <span className={styles.errorText}>This field is required</span>
            )}
            {errors.password?.type === "minLength" && (
              <span className={styles.errorText}>
                Minimal length is 6 chacters
              </span>
            )}
          </div>
          <div
            className={`${styles.inputContainer} ${
              errors.passConf && styles.error
            }`}
          >
            <label htmlFor="passConf">
              Confirm New Password<span className={styles.star}>*</span>
            </label>
            <input
              type="password"
              name="passConf"
              ref={register({
                required: true,
                validate: (value) => {
                  return value === watch("password");
                },
              })}
            />
            {errors.passConf?.type === "required" && (
              <span className={styles.errorText}>This field is required</span>
            )}
            {errors.passConf?.type === "validate" && (
              <span className={styles.errorText}>Password doesn't match</span>
            )}
          </div>
        </>
      )}

      <p className={styles.bankPurpose}>
        We need your bank account for campaign purpose
      </p>
      <div
        className={`${styles.inputContainer} ${
          errors.bank_name && styles.error
        }`}
      >
        <label htmlFor="bank_name">
          Bank Name<span className={styles.star}>*</span>
        </label>
        <input
          type="text"
          name="bank_name"
          defaultValue={userBankName}
          ref={register({ required: true })}
        />
        {errors.bank_name && (
          <span className={styles.errorText}>This field is required</span>
        )}
      </div>
      <div
        className={`${styles.inputContainer} ${
          errors.bank_account && styles.error
        }`}
      >
        <label htmlFor="bank_account">
          Bank Account Number<span className={styles.star}>*</span>
        </label>
        <input
          type="number"
          name="bank_account"
          defaultValue={userBankAccount}
          ref={register({ required: true })}
        />
        {errors.bank_account && (
          <span className={styles.errorText}>This field is required</span>
        )}
      </div>
      <button
        className={`${styles.submitBtn} ${
          auth.isEditLoading && styles.loading
        }`}
      >
        {auth.isEditLoading ? (
          <div className={styles.progress}>
            <img src={spinner} alt="spinner" />
            <span>Processing</span>
          </div>
        ) : (
          <span>Save changes</span>
        )}
      </button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(EditProfileForm);
