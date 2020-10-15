import React from "react";
import styles from "./DownloadApps.module.css";

import playStore from "../../../assets/homepage/Home/google-play-badge.png";
import appleStore from "../../../assets/homepage/Home/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg";

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
        <div>
          <p className={styles.available}>Available Now</p>
          <div className={styles.btnContainer}>
            <img src={appleStore} alt="App Store" className={styles.appBadge} />
            <img
              src={playStore}
              alt="Play Store"
              className={styles.playBadge}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApps;
