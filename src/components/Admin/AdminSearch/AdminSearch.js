import React from "react";

import styles from "./AdminSearch.module.css";

const AdminSearch = ({ setSearch, search, setPage }) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  return (
    <input
      type="text"
      className={styles.input}
      placeholder="Search"
      onChange={handleChange}
      value={search}
    />
  );
};

export default AdminSearch;
