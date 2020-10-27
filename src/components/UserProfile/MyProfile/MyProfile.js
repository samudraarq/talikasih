import React from "react";
import { connect } from "react-redux";
import styles from "./MyProfile.module.css";

import profilePic from "../../../assets/profile/foto-profile.png";
import { Link } from "react-router-dom";

const MyProfile = ({ auth }) => {
  const userName = auth.user.name;
  const userEmail = auth.user.email;
  const userBankName = auth.user.creditcard;
  const userBankAccount = 1234567;
  const newBankAccount =
    userBankName +
    " - " +
    userBankAccount.toString().replace(/\d(?=\d{3})/gm, "*");

  const handleLogout = () => {
    console.log("logout");
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>My Profile</h3>
        <button className={styles.logoutBtn} onClick={handleLogout}>
          Logout
        </button>
      </div>
      <img src={profilePic} alt="User" className={styles.userPic} />
      <Link to="/user/profile/edit" className={styles.editBtn}>
        Edit Profile
      </Link>
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
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(MyProfile);
