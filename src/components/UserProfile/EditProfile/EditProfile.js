import React, { useState } from "react";
import { connect } from "react-redux";
import qs from "qs";
import {
  editUserProfile,
  editUserImage,
} from "../../../redux/actions/authActions";
import ChangeProfileImage from "./ChangeProfileImage/ChangeProfileImage";
import styles from "./EditProfile.module.css";
import EditProfileForm from "./EditProfileForm/EditProfileForm";

const EditProfile = ({ editUserProfile, editUserImage }) => {
  const [profPic, setProfPic] = useState(null);

  const changeHandler = (e) => {
    setProfPic(e.target.files[0]);
  };

  const onSubmit = (data) => {
    console.log(data);
    const dataQs = qs.stringify(data);
    editUserProfile(dataQs);

    if (profPic) {
      const formData = new FormData();
      formData.append("photo", profPic, profPic.name);
      editUserImage(formData);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.profileContainer}>
        <h3 className={styles.title}>Edit Profile</h3>
        <ChangeProfileImage changeHandler={changeHandler} profPic={profPic} />
        <EditProfileForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    editUserProfile: (dataQs) => dispatch(editUserProfile(dataQs)),
    editUserImage: (formData) => dispatch(editUserImage(formData)),
  };
};

export default connect(null, mapDispatchToProps)(EditProfile);
