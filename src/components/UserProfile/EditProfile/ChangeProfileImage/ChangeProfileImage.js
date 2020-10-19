import React, { useState, useRef } from "react";
import styles from "./ChangeProfileImage.module.css";
import profilePic from "../../../../assets/profile/foto-profile.png";

const ChangeProfileImage = () => {
  const [profPic, setProfPic] = useState(null);

  const fileInput = useRef(null);

  const changeHandler = (e) => {
    setProfPic(e.target.files[0]);
  };

  return (
    <>
      <img
        src={profPic ? URL.createObjectURL(profPic) : profilePic}
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

export default ChangeProfileImage;
