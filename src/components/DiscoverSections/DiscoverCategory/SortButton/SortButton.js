import React, { useEffect, useState } from "react";
import queryString from "query-string";
import styles from "./SortButton.module.css";

import sort from "../../../../assets/discover/sort.svg";
import { Link, useLocation } from "react-router-dom";

const SortButton = ({ urlLink, setPage }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const parsed = queryString.parse(location.search);
    console.log(parsed);
  }, [location]);

  const handleClick = () => {
    setOpenMenu(true);

    document.addEventListener("click", handleClose);
  };

  const handleClose = () => {
    setOpenMenu(false);

    document.removeEventListener("click", handleClose);
  };

  const handleChoose = () => {
    handleClose();
    setPage(1);
  };

  return (
    <>
      <div className={styles.sortContainer}>
        <div onClick={handleClick} className={styles.sortIconContainer}>
          <p className={styles.sortText}>Sort</p>
          <img src={sort} alt="sort" className={styles.sortIcon} />
        </div>

        {openMenu && (
          <div className={styles.menuContainer}>
            <Link
              to={`/discover/${urlLink}sort=newest`}
              className={styles.menuItem}
              onClick={handleChoose}
            >
              Newest
            </Link>
            <Link
              to={`/discover/${urlLink}sort=mosturgent`}
              className={styles.menuItem}
              onClick={handleChoose}
            >
              Most Urgent
            </Link>
            <Link
              to={`/discover/${urlLink}sort=popular`}
              className={styles.menuItem}
              onClick={handleChoose}
            >
              Popular
            </Link>
            <Link
              to={`/discover/${urlLink}sort=lessdonation`}
              className={styles.menuItem}
              onClick={handleChoose}
            >
              Less Donation
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default SortButton;
