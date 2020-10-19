import React from "react";
import { useForm } from "react-hook-form";

import styles from "./EditProfileForm.module.css";

const EditProfileForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();

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
        <label htmlFor="name">Name</label>
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
        <label htmlFor="email">Email</label>
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
      <p className={styles.resetPass}>Reset password</p>
      <p className={styles.bankPurpose}>
        We need your bank account for campaign purpose
      </p>
      <div
        className={`${styles.inputContainer} ${
          errors.bankName && styles.error
        }`}
      >
        <label htmlFor="bankName">Bank Name</label>
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
        <label htmlFor="bankAccountNumber">Bank Account Number</label>
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
      <button>Submit</button>
    </form>
  );
};

export default EditProfileForm;
