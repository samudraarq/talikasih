import React from "react";
import styles from "./DiscoverCards.module.css";
import CampaignCard from "../../../CampaignCard/CampaignCard";

const DiscoverCards = () => {
  return (
    <div className={styles.cardsContainer}>
      <div className={styles.card}>
        <CampaignCard />
      </div>
      <div className={styles.card}>
        <CampaignCard />
      </div>
      <div className={styles.card}>
        <CampaignCard />
      </div>
      <div className={styles.card}>
        <CampaignCard />
      </div>
      <div className={styles.card}>
        <CampaignCard />
      </div>
      <div className={styles.card}>
        <CampaignCard />
      </div>
      <div className={styles.card}>
        <CampaignCard />
      </div>
      <div className={styles.card}>
        <CampaignCard />
      </div>
      <div className={styles.card}>
        <CampaignCard />
      </div>
      <div className={styles.card}>
        <CampaignCard />
      </div>
      <div className={styles.card}>
        <CampaignCard />
      </div>
      <div className={styles.card}>
        <CampaignCard />
      </div>
    </div>
  );
};

export default DiscoverCards;
