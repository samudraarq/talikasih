import React, { useState } from "react";
import { useForm } from "react-hook-form";

import styles from "./EditProfileForm.module.css";

const EditProfileForm = () => {
  const [resetPass, setResetPass] = useState(false);

  const { register, handleSubmit, watch, errors } = useForm({
    mode: "onTouched",
  });

  const userName = "Luna";
  const userEmail = "luna@mail.com";
  const userBankName = "BCA";
  const userBankAccount = 1234567;

  const onSubmit = (data) => {
    console.log(data);
  };

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
              name="pass"
              defaultValue="*******"
              ref={register({ required: true, minLength: 6 })}
            />
            {errors.pass?.type === "required" && (
              <span className={styles.errorText}>This field is required</span>
            )}
            {errors.pass?.type === "minLength" && (
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
              defaultValue="*******"
              ref={register({
                required: true,
                validate: (value) => {
                  return value === watch("pass");
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
          errors.bankName && styles.error
        }`}
      >
        <label htmlFor="bankName">
          Bank Name<span className={styles.star}>*</span>
        </label>
        <input
          type="text"
          name="bankName"
          defaultValue={userBankName}
          ref={register({ required: true })}
        />
        {errors.bankName && (
          <span className={styles.errorText}>This field is required</span>
        )}
      </div>
      <div
        className={`${styles.inputContainer} ${
          errors.bankAccountNumber && styles.error
        }`}
      >
        <label htmlFor="bankAccountNumber">
          Bank Account Number<span className={styles.star}>*</span>
        </label>
        <input
          type="number"
          name="bankAccountNumber"
          defaultValue={userBankAccount}
          ref={register({ required: true })}
        />
        {errors.bankAccountNumber && (
          <span className={styles.errorText}>This field is required</span>
        )}
      </div>
      <button className={styles.submitBtn}>Save changes</button>
    </form>
  );
};

export default EditProfileForm;
