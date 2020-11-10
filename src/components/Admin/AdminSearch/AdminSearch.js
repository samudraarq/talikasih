import React from "react";

import styles from "./AdminSearch.module.css";

const AdminSearch = ({ setSearch }) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <input
      type="text"
      className={styles.input}
      placeholder="Search"
      onChange={handleChange}
    />
  );
};

export default AdminSearch;
