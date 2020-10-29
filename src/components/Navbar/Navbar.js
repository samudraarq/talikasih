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
import { Link, useHistory } from "react-router-dom";

const Navbar = (props) => {
  const [openSearch, setOpenSearch] = useState(false);
  const [createBtn, setCreateBtn] = useState(true);

  const [searchText, setSearchText] = useState("");

  const history = useHistory();

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      history.push(`/discover/search?search=${searchText}`);
    }
  };

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
          <Link to="/">
            <img src={logo} alt="logo" className={styles.logo} />
          </Link>
          <div className={styles.navLink}>
            {createBtn && props.auth.isLogin && (
              <>
                <span
                  className={`${styles.createCampaignBtn} ${
                    !openSearch && styles.openBtn
                  }`}
                >
                  Create Campaign
                </span>
                <Link
                  to="/discover"
                  className={`${styles.donateBtn} ${
                    !openSearch && styles.openBtn
                  }`}
                >
                  Donate
                </Link>
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
                onChange={handleChange}
                onKeyUp={handleSubmit}
              />
            </div>
            {props.auth.isLogin && (
              <Link to="/user/profile" className={styles.profileBtn}>
                My Profile
              </Link>
            )}
            {!props.auth.isLogin && (
              <>
                <span className={styles.loginBtn} onClick={handleLogin}>
                  Login
                </span>
                <span className={styles.registerBtn} onClick={handleReg}>
                  Register
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </>
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
    setFormRegister: () => dispatch(setFormRegister()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
