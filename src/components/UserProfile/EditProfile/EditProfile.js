import React from "react";
import ChangeProfileImage from "./ChangeProfileImage/ChangeProfileImage";
import styles from "./EditProfile.module.css";

const EditProfile = () => {
  const userName = "Luna";
  const userEmail = "luna@mail.com";
  const userBankName = "BCA";
  const userBankAccount = 1234567;
  const newBankAccount =
    userBankName +
    " - " +
    userBankAccount.toString().replace(/\d(?=\d{3})/gm, "*");

  return (
    <div className={styles.container}>
      <div className={styles.profileContainer}>
        <h3 className={styles.title}>Edit Profile</h3>
        <ChangeProfileImage />
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
            <label htmlFor="bank">Bank Info</label>
            <input type="text" name="bank" value={newBankAccount} readOnly />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
