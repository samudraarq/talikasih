import React from "react";
import styles from "./MyCampaign.module.css";

import CampaignCard from "../../CampaignCard/CampaignCard";

const MyCampaign = () => {
  const campaigns = 2;

  return (
    <div className={styles.campaignContainer}>
      <h3 className={styles.title}>My Campaigns ({campaigns})</h3>
      <div className={styles.campaigns}>
        <CampaignCard />
        <CampaignCard />
      </div>
      <button className={styles.loadBtn}>Load more</button>
    </div>
  );
};

export default MyCampaign;
