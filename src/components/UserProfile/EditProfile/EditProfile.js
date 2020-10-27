import React from "react";
import ChangeProfileImage from "./ChangeProfileImage/ChangeProfileImage";
import styles from "./EditProfile.module.css";
import EditProfileForm from "./EditProfileForm/EditProfileForm";

const EditProfile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.profileContainer}>
        <h3 className={styles.title}>Edit Profile</h3>
        <ChangeProfileImage />
        <EditProfileForm />
      </div>
    </div>
  );
};

export default EditProfile;
