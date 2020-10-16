import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/general/logo.svg";
import search from "../../assets/general/search-icon.svg";
import { Link, useHistory } from "react-router-dom";

const Navbar = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [createBtn, setCreateBtn] = useState(true);

  const [searchText, setSearchText] = useState("");

  const history = useHistory();

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

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      history.push(`/discover/search?search=${searchText}`);
    }
  };

  return (
    <div className={styles.navContainer}>
      <div className={styles.container}>
        <Link to="/">
          <img src={logo} alt="logo" className={styles.logo} />
        </Link>
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
            <img src={search} alt="search icon" className={styles.searchIcon} />
            <input
              className={`${styles.searchInput} ${openSearch && styles.open}`}
              type="text"
              placeholder="Search"
              onBlur={handleCloseSearch}
              onChange={handleChange}
              onKeyUp={handleSubmit}
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
