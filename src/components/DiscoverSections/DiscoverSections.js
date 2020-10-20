import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getNewCampaigns,
  getPopularCampaigns,
} from "../../redux/actions/campaignActions";
import styles from "./DiscoverSections.module.css";
import CampaignCard from "../CampaignCard/CampaignCard";

const DiscoverSections = ({
  newCampaign,
  popularCampaign,
  getNewCampaigns,
  getPopularCampaigns,
}) => {
  useEffect(() => {
    getNewCampaigns(1);
    getPopularCampaigns(1);
  }, [getNewCampaigns, getPopularCampaigns]);

  const renderNewCampaigns = newCampaign?.documents
    .slice(0, 3)
    .map((campaign) => <CampaignCard campaign={campaign} key={campaign.id} />);

  const renderPopularCampaigns = popularCampaign?.documents
    .slice(0, 3)
    .map((campaign) => <CampaignCard campaign={campaign} key={campaign.id} />);

  return (
    <div className={styles.container}>
      <div className={styles.sectionsContainer}>
        <span className={styles.sectionsTitle}>Newest</span>
        <div className={styles.cardsContainer}>{renderNewCampaigns}</div>
      </div>
      <div className={styles.sectionsContainer}>
        <span className={styles.sectionsTitle}>Most Urgent</span>
        <div className={styles.cardsContainer}>
          {/* <CampaignCard />
          <CampaignCard />
          <CampaignCard /> */}
        </div>
      </div>
      <div className={styles.sectionsContainer}>
        <span className={styles.sectionsTitle}>Gained Momentum</span>
        <div className={styles.cardsContainer}>{renderPopularCampaigns}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    newCampaign: state.newCampaign,
    popularCampaign: state.popularCampaign,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getNewCampaigns: (page) => dispatch(getNewCampaigns(page)),
    getPopularCampaigns: (page) => dispatch(getPopularCampaigns(page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverSections);
