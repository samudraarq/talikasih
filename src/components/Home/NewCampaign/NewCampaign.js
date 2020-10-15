import React from "react";
import styles from "./NewCampaign.module.css";

const NewCampaign = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.segmentTitle}>New</h3>
      <h2 className={styles.topicTitle}>
        The latest people who need your help
      </h2>
    </div>
  );
};

export default NewCampaign;
