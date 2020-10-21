import React from "react";

import styles from "./DiscoverCards.module.css";
import CampaignCard from "../../../CampaignCard/CampaignCard";

const DiscoverCards = ({ campaigns }) => {
  const renderCard = campaigns?.documents.map((campaign) => (
    <div className={styles.card} key={campaign.id}>
      <CampaignCard campaign={campaign} />
    </div>
  ));

  return (
    <div className={styles.cardsContainer}>
      {campaigns.loading ? <p>Loading...</p> : renderCard}
    </div>
  );
};

export default DiscoverCards;
