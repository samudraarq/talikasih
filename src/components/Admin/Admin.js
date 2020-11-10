import React, { useState } from "react";

import styles from "./Admin.module.css";

import Container from "../UI/Container";
import AdminCategorySelect from "./AdminCategorySelect/AdminCategorySelect";
import AdminSearch from "./AdminSearch/AdminSearch";
import AdminTable from "./AdminTable/AdminTable";

const Admin = () => {
  const [categoryId, setCategoryId] = useState("");
  const [search, setSearch] = useState("");

  console.log(search);

  return (
    <Container>
      <div className={styles.container}>
        <AdminCategorySelect
          setCategoryId={setCategoryId}
          categoryId={categoryId}
        />
        <div className={styles.campaignsContainer}>
          <div className={styles.header}>
            <h3>All Campaigns</h3>
            <AdminSearch setSearch={setSearch} />
          </div>
          <div className={styles.table}>
            <AdminTable />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Admin;
