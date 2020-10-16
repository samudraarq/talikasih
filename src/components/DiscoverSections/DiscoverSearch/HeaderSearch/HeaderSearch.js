import React, { useEffect, useState } from "react";
import queryString from "query-string";
import { Link, useLocation } from "react-router-dom";
import styles from "./HeaderSearch.module.css";

import leftArrow from "../../../../assets/discover/left-arrow.svg";

const HeaderSearch = () => {
  const [searchText, setSearchText] = useState("");

  const location = useLocation();

  useEffect(() => {
    const parsed = queryString.parse(location.search);
    setSearchText(parsed.search);
  }, [location]);

  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.textContainer}>
          <p className={styles.categoryText}>Results for "{searchText}"</p>
          <div className={styles.backlinkContainer}>
            <Link to="/discover" className={styles.backlinkText}>
              <img src={leftArrow} alt="left arrow" />
              <p>See all categories</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderSearch;
