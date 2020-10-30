import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import qs from "qs";
import {
  editUserProfile,
  editUserImage,
  setEditSuccess,
} from "../../../redux/actions/authActions";
import ChangeProfileImage from "./ChangeProfileImage/ChangeProfileImage";
import styles from "./EditProfile.module.css";
import EditProfileForm from "./EditProfileForm/EditProfileForm";
import { useHistory } from "react-router-dom";

const EditProfile = ({
  auth,
  editUserProfile,
  editUserImage,
  setEditSuccess,
}) => {
  const [profPic, setProfPic] = useState(null);

  const history = useHistory();

  useEffect(() => {
    if (auth.isEditSuccess) {
      setTimeout(() => {
        console.log("success");
        setEditSuccess();
        history.push("/user/profile");
      }, 2000);
    }
  }, [auth.isEditSuccess, setEditSuccess, history]);

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

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editUserProfile: (dataQs) => dispatch(editUserProfile(dataQs)),
    editUserImage: (formData) => dispatch(editUserImage(formData)),
    setEditSuccess: () => dispatch(setEditSuccess()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
