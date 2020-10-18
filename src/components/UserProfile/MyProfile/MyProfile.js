import React from "react";
import styles from "./MyProfile.module.css";

import profilePic from "../../../assets/profile/foto-profile.png";

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
    </div>
  );
};

export default MyProfile;
