import React from "react";
import styles from "./MyProfile.module.css";

import profilePic from "../../../assets/profile/foto-profile.png";
import { Link } from "react-router-dom";

const MyProfile = () => {
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
      <Link to="user/profile/edit" className={styles.editBtn}>
        Edit Profile
      </Link>
    </div>
  );
};

export default MyProfile;
