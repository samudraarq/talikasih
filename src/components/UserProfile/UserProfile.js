import React from "react";
import MyProfile from "./MyProfile/MyProfile";
import styles from "./UserProfile.module.css";

const UserProfile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.segment}>
        <MyProfile />
      </div>
    </div>
  );
};

export default UserProfile;
