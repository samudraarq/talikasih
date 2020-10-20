import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getNewCampaigns } from "../../../redux/actions/campaignActions";

import CampaignCard from "../../CampaignCard/CampaignCard";
import styles from "./NewCampaign.module.css";

const NewCampaign = ({ newCampaign, getNewCampaigns }) => {
  useEffect(() => {
    getNewCampaigns(1);
  }, [getNewCampaigns]);

  const renderCards = newCampaign?.documents
    .slice(0, 3)
    .map((campaign) => <CampaignCard campaign={campaign} key={campaign.id} />);

  return (
    <div className={styles.container}>
      <h3 className={styles.segmentTitle}>New</h3>
      <h2 className={styles.topicTitle}>
        The latest people who need your help
      </h2>
      <div className={styles.cardsContainer}>
        {newCampaign.loading ? <p>Loading...</p> : renderCards}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    newCampaign: state.newCampaign,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getNewCampaigns: (page) => dispatch(getNewCampaigns(page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCampaign);
