import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCategoryCampaigns } from "../../../../redux/actions/campaignActions";
import styles from "./DiscoverCards.module.css";
import CampaignCard from "../../../CampaignCard/CampaignCard";
import { useParams } from "react-router-dom";
import { render } from "react-dom";

const DiscoverCards = ({ categoryCampaign, getCategoryCampaigns }) => {
  const { categoryId } = useParams();

  useEffect(() => {
    getCategoryCampaigns(1, categoryId);
  }, [getCategoryCampaigns, categoryId]);

  const renderCard = categoryCampaign?.documents.map((campaign) => (
    <div className={styles.card} key={campaign.id}>
      <CampaignCard campaign={campaign} />
    </div>
  ));

  return <div className={styles.cardsContainer}>{renderCard}</div>;
};

const mapStateToProps = (state) => {
  return {
    categoryCampaign: state.categoryCampaign,
  };
};

const masDispatchToProps = (dispatch) => {
  return {
    getCategoryCampaigns: (page, categoryId) =>
      dispatch(getCategoryCampaigns(page, categoryId)),
  };
};

export default connect(mapStateToProps, masDispatchToProps)(DiscoverCards);
