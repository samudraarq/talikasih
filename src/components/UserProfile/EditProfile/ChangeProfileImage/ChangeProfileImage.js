import React, { useRef } from "react";
import { connect } from "react-redux";
import styles from "./ChangeProfileImage.module.css";
import profilePic from "../../../../assets/profile/foto-profile.png";

const ChangeProfileImage = ({ profPic, changeHandler, auth }) => {
  const fileInput = useRef(null);

  const prevPic = auth.user?.photo || profilePic;

  return (
    <>
      <img
        src={profPic ? URL.createObjectURL(profPic) : prevPic}
        alt="User"
        className={styles.userPic}
      />
      <input
        type="file"
        name="profPic"
        onChange={changeHandler}
        style={{ display: "none" }}
        ref={fileInput}
      />
      <button
        onClick={() => fileInput.current.click()}
        className={styles.changeImg}
      >
        Change Image Profile
      </button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(ChangeProfileImage);
