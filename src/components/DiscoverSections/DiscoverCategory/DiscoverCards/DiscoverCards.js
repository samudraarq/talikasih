import React from "react";

import styles from "./DiscoverCards.module.css";
import CampaignCard from "../../../CampaignCard/CampaignCard";
import SkeletonCard from "../../../Skeleton/SkeletonCard";

const DiscoverCards = ({ campaigns }) => {
  const renderCard = campaigns?.documents.map((campaign) => (
    <CampaignCard campaign={campaign} key={campaign.id} />
  ));

  const renderSkeletonCards = [1, 2, 3].map((n) => <SkeletonCard key={n} />);

  return (
    <div className={styles.cardsContainer}>
      {campaigns.loading ? renderSkeletonCards : renderCard}
    </div>
  );
};

export default DiscoverCards;
