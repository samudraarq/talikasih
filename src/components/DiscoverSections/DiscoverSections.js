import React from "react";
import styles from "./DiscoverSections.module.css";
import CampaignCard from "../CampaignCard/CampaignCard";

const DiscoverSections = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sectionsContainer}>
        <span className={styles.sectionsTitle}>Newest</span>
        <div className={styles.cardsContainer}>
          <CampaignCard />
          <CampaignCard />
          <CampaignCard />
        </div>
      </div>
      <div className={styles.sectionsContainer}>
        <span className={styles.sectionsTitle}>Most Urgent</span>
        <div className={styles.cardsContainer}>
          <CampaignCard />
          <CampaignCard />
          <CampaignCard />
        </div>
      </div>
      <div className={styles.sectionsContainer}>
        <span className={styles.sectionsTitle}>Gained Momentum</span>
        <div className={styles.cardsContainer}>
          <CampaignCard />
          <CampaignCard />
          <CampaignCard />
        </div>
      </div>
    </div>
  );
};

export default DiscoverSections;
