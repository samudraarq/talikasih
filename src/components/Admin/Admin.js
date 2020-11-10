import React, { useState } from "react";

import styles from "./Admin.module.css";

import Container from "../UI/Container";
import AdminCategorySelect from "./AdminCategorySelect/AdminCategorySelect";

const Admin = () => {
  const [categoryId, setCategoryId] = useState("");

  return (
    <Container>
      <div className={styles.container}>
        <AdminCategorySelect
          setCategoryId={setCategoryId}
          categoryId={categoryId}
        />
      </div>
    </Container>
  );
};

export default Admin;
