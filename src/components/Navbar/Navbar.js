import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/general/logo.svg";
import search from "../../assets/general/search-icon.svg";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="logo" />
      <div className={styles.navLink}>
        <div className={styles.searchContainer}>
          <img src={search} alt="search icon" className={styles.searchIcon} />
          <span className={styles.searchText}>Search</span>
        </div>
        <span className={styles.loginBtn}>Login</span>
        <span className={styles.registerBtn}>Register</span>
      </div>
    </div>
  );
};

export default Navbar;
