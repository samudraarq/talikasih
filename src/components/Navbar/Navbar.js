import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/general/logo.svg";
import search from "../../assets/general/search-icon.svg";

const Navbar = () => {
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <div className={styles.navContainer}>
      <div className={styles.container}>
        <img src={logo} alt="logo" className={styles.logo} />
        <div className={styles.navLink}>
          <span
            className={`${styles.createCampaignBtn} ${
              !openSearch && styles.openBtn
            }`}
          >
            Create Campaign
          </span>
          <span
            className={`${styles.donateBtn} ${!openSearch && styles.openBtn}`}
          >
            Donate
          </span>
          <div className={styles.searchContainer}>
            <img src={search} alt="search icon" className={styles.searchIcon} />
            <input
              className={`${styles.searchInput} ${openSearch && styles.open}`}
              type="text"
              placeholder="Search"
              onMouseEnter={() => setOpenSearch(true)}
              onMouseLeave={() => setOpenSearch(false)}
            />
          </div>
          <span className={styles.loginBtn}>Login</span>
          <span className={styles.registerBtn}>Register</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
