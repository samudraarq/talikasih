import React, { useState } from "react";
import { connect } from "react-redux";
import {
  setModalOpen,
  setFormLogin,
  setFormRegister,
} from "../../redux/actions/layoutActions";
import styles from "./Navbar.module.css";
import logo from "../../assets/general/logo.svg";
import search from "../../assets/general/search-icon.svg";
import ModalLogin from "../Modal/ModalLogin";

const Navbar = (props) => {
  const [openSearch, setOpenSearch] = useState(false);
  const [createBtn, setCreateBtn] = useState(true);

  const handleOpenSearch = () => {
    setOpenSearch(true);
    setCreateBtn(false);
  };

  const handleCloseSearch = () => {
    setOpenSearch(false);
    setTimeout(() => {
      setCreateBtn(true);
    }, 500);
  };

  const handleLogin = () => {
    props.setModalOpen();
    props.setFormLogin();
  };

  const handleReg = () => {
    props.setModalOpen();
    props.setFormRegister();
  };

  return (
    <>
      <ModalLogin />
      <div className={styles.navContainer}>
        <div className={styles.container}>
          <img src={logo} alt="logo" className={styles.logo} />
          <div className={styles.navLink}>
            {createBtn && (
              <>
                <span
                  className={`${styles.createCampaignBtn} ${
                    !openSearch && styles.openBtn
                  }`}
                >
                  Create Campaign
                </span>
                <span
                  className={`${styles.donateBtn} ${
                    !openSearch && styles.openBtn
                  }`}
                >
                  Donate
                </span>
              </>
            )}
            <div className={styles.searchContainer} onClick={handleOpenSearch}>
              <img
                src={search}
                alt="search icon"
                className={styles.searchIcon}
              />
              <input
                className={`${styles.searchInput} ${openSearch && styles.open}`}
                type="text"
                placeholder="Search"
                onBlur={handleCloseSearch}
              />
            </div>

            <span className={styles.loginBtn} onClick={handleLogin}>
              Login
            </span>
            <span className={styles.registerBtn} onClick={handleReg}>
              Register
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setModalOpen: () => dispatch(setModalOpen()),
    setFormLogin: () => dispatch(setFormLogin()),
    setFormRegister: () => dispatch(setFormRegister()),
  };
};

export default connect(null, mapDispatchToProps)(Navbar);
