import React from "react";
import styles from "./DownloadApps.module.css";

import peopleRunning from "../../../assets/homepage/Home/Rectangle 38.png";

const DownloadApps = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.topicTitle}>Spread kindness anytime, anywhere</h2>
      <div className={styles.downloadContainer}>
        <img
          src={peopleRunning}
          alt="people running"
          className={styles.bigImage}
        />
        <div className={styles.downloadBtnContainer}>
          <p className={styles.available}>Available Now</p>
          <div className={styles.btnContainer}></div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApps;
