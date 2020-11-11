import React from "react";
import { connect } from "react-redux";
import {
  setModalOpen,
  setFormLogin,
} from "../../../redux/actions/layoutActions";

import styles from "./BottomNavbar.module.css";

import plusSquare from "../../../assets/bottomnav/plus-square.svg";
import star from "../../../assets/bottomnav/star.svg";
import user from "../../../assets/bottomnav/user.svg";
import { Link } from "react-router-dom";

const BottomNavbar = ({ auth, setModalOpen, setFormLogin }) => {
  const openModal = () => {
    setModalOpen();
    setFormLogin();
  };

  return (
    <div className={styles.container}>
      <div className={styles.iconsContainer}>
        <Link to="/discover" style={{ textDecoration: "none" }}>
          <div className={styles.icon}>
            <img src={star} alt="star" />
            <span>Donate</span>
          </div>
        </Link>
        <Link to="/campaign/create" style={{ textDecoration: "none" }}>
          <div className={styles.icon}>
            <img src={plusSquare} alt="star" />
            <span>Create Campaign</span>
          </div>
        </Link>
        {auth.isLogin ? (
          <Link to="/user/profile" style={{ textDecoration: "none" }}>
            <div className={styles.icon}>
              <img src={user} alt="star" />
              <span>My Account</span>
            </div>
          </Link>
        ) : (
          <div className={styles.icon} onClick={openModal}>
            <img src={user} alt="star" />
            <span>Login/Register</span>
          </div>
        )}
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
    setModalOpen: () => dispatch(setModalOpen()),
    setFormLogin: () => dispatch(setFormLogin()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BottomNavbar);
