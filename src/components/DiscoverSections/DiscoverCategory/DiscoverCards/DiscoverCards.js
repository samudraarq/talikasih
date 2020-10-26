import React from "react";

import styles from "./DiscoverCards.module.css";
import CampaignCard from "../../../CampaignCard/CampaignCard";
import SkeletonCard from "../../../Skeleton/SkeletonCard";

const DiscoverCards = ({ campaigns }) => {
  const renderCard = campaigns?.documents.map((campaign) => (
    <div className={styles.card} key={campaign.id}>
      <CampaignCard campaign={campaign} />
    </div>
  ));

  const renderSkeletonCards = [1, 2, 3].map((n) => (
    <div className={styles.card} key={n}>
      <SkeletonCard />
    </div>
  ));

  return (
    <div className={styles.cardsContainer}>
      {campaigns.loading ? renderSkeletonCards : renderCard}
    </div>
  );
};

export default DiscoverCards;
