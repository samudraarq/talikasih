import React from "react";
import styles from "./SideScroll.module.css";

const SideScroll = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default SideScroll;
