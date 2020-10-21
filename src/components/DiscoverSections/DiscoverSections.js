import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getNewCampaigns,
  getPopularCampaigns,
  getUrgentCampaigns,
} from "../../redux/actions/campaignActions";
import styles from "./DiscoverSections.module.css";
import CampaignCard from "../CampaignCard/CampaignCard";

const DiscoverSections = ({
  newCampaign,
  popularCampaign,
  urgentCampaign,
  getNewCampaigns,
  getPopularCampaigns,
  getUrgentCampaigns,
}) => {
  useEffect(() => {
    getNewCampaigns(1);
    getPopularCampaigns(1);
    getUrgentCampaigns();
  }, [getNewCampaigns, getPopularCampaigns, getUrgentCampaigns]);

  const renderNewCampaigns = newCampaign?.documents
    .slice(0, 3)
    .map((campaign) => <CampaignCard campaign={campaign} key={campaign.id} />);

  const renderPopularCampaigns = popularCampaign?.documents
    .slice(0, 3)
    .map((campaign) => <CampaignCard campaign={campaign} key={campaign.id} />);

  const renderUrgentCampaigns = urgentCampaign?.documents
    .slice(0, 3)
    .map((campaign) => <CampaignCard campaign={campaign} key={campaign.id} />);

  return (
    <div className={styles.container}>
      <div className={styles.sectionsContainer}>
        <span className={styles.sectionsTitle}>Newest</span>
        <div className={styles.cardsContainer}>
          {newCampaign.loading ? <p>Loading...</p> : renderNewCampaigns}
        </div>
      </div>
      <div className={styles.sectionsContainer}>
        <span className={styles.sectionsTitle}>Most Urgent</span>
        <div className={styles.cardsContainer}>
          {urgentCampaign.loading ? <p>Loading...</p> : renderUrgentCampaigns}
        </div>
      </div>
      <div className={styles.sectionsContainer}>
        <span className={styles.sectionsTitle}>Gained Momentum</span>
        <div className={styles.cardsContainer}>
          {popularCampaign.loading ? <p>Loading...</p> : renderPopularCampaigns}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    newCampaign: state.newCampaign,
    popularCampaign: state.popularCampaign,
    urgentCampaign: state.urgentCampaign,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getNewCampaigns: (page) => dispatch(getNewCampaigns(page)),
    getPopularCampaigns: (page) => dispatch(getPopularCampaigns(page)),
    getUrgentCampaigns: () => dispatch(getUrgentCampaigns()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverSections);
