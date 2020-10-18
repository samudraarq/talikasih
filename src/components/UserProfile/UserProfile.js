import React from "react";
import MyProfile from "./MyProfile/MyProfile";
import styles from "./UserProfile.module.css";

const UserProfile = () => {
  return (
    <div className={styles.container}>
      <MyProfile />
    </div>
  );
};

export default UserProfile;
