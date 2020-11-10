import React from "react";

import styles from "./Admin.module.css";

import Container from "../UI/Container";
import AdminCategorySelect from "./AdminCategorySelect/AdminCategorySelect";

const Admin = () => {
  return (
    <Container>
      <div className={styles.container}>
        <AdminCategorySelect />
      </div>
    </Container>
  );
};

export default Admin;
