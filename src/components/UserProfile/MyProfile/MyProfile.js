import React from "react";
import { connect } from "react-redux";
import { setLogout } from "../../../redux/actions/authActions";
import styles from "./MyProfile.module.css";

import profilePic from "../../../assets/profile/foto-profile.png";
import { Link, useHistory } from "react-router-dom";

const MyProfile = ({ auth, setLogout }) => {
  const userName = auth.user?.name;
  const userEmail = auth.user?.email;
  const userBankName = auth.user?.bank_name;
  const userBankAccount = auth.user?.bank_account;
  let newBankAccount = "";
  if (userBankName && userBankAccount) {
    newBankAccount =
      userBankName +
      " - " +
      userBankAccount.toString().replace(/\d(?=\d{3})/gm, "*");
  }

  const history = useHistory();

  const handleLogout = () => {
    setLogout();
    history.push("/");
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>My Profile</h3>
        <button className={styles.logoutBtn} onClick={handleLogout}>
          Logout
        </button>
      </div>
      <img
        src={auth.user?.photo ? auth.user?.photo : profilePic}
        alt="User"
        className={styles.userPic}
      />
      <Link to="/user/profile/edit" className={styles.editBtn}>
        Edit Profile
      </Link>
      <div className={styles.inputsContainer}>
        <div className={styles.inputContainer}>
          <label htmlFor="name">Name</label>
          <div>
            <p name="name">{userName}</p>
          </div>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="email">Email</label>
          <div>
            <p name="email">{userEmail}</p>
          </div>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="bank">Bank Info</label>
          <div>
            <p name="bank">{newBankAccount}</p>
          </div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    setLogout: () => dispatch(setLogout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
