import React from "react";
import MyDonations from "./MyDonations/MyDonations";
import MyProfile from "./MyProfile/MyProfile";
import styles from "./UserProfile.module.css";

const UserProfile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.segment}>
        <MyProfile />
      </div>
      <div className={styles.segment}>
        <MyDonations />
      </div>
    </div>
  );
};

export default UserProfile;
