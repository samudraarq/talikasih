import React from "react";
import styles from "./EditProfileForm.module.css";

const EditProfileForm = () => {
  const userName = "Luna";
  const userEmail = "luna@mail.com";
  const userBankName = "BCA";
  const userBankAccount = 1234567;

  return (
    <div className={styles.inputsContainer}>
      <div className={styles.inputContainer}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={userName} readOnly />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" value={userEmail} readOnly />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="bankName">Bank Name</label>
        <input type="text" name="bankName" value={userBankName} readOnly />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="bankAccountNumber">Bank Account Number</label>
        <input
          type="text"
          name="bankAccountNumber"
          value={userBankAccount}
          readOnly
        />
      </div>
    </div>
  );
};

export default EditProfileForm;
