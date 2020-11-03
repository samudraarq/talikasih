import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getRelatedCampaigns } from "../../../redux/actions/donorActions";
import styles from "./CampaignDetailsDonateRelatedCampaing.module.css";
import CampaignCard from "../../CampaignCard/CampaignCard";
import SkeletonCard from "../../Skeleton/SkeletonCard";

const CampaignDetailsDonateRelatedCampaing = ({
  dataDonorAll,
  getRelatedCampaigns,
}) => {
  const dataDonate = dataDonorAll.dataDonate;

  useEffect(() => {
    getRelatedCampaigns(dataDonate.CategoryId, dataDonate.id);
  }, [getRelatedCampaigns, dataDonate]);

  const renderCards = dataDonorAll.relatedCampaigns?.map((campaign) => (
    <CampaignCard campaign={campaign} key={campaign.id} />
  ));

  const renderSkeleton = [1, 2, 3].map((n) => <SkeletonCard key={n} />);

  return (
    <div className={styles.container}>
      <span className={styles.sectionsTitle}>Related campaign</span>
      <div className={styles.cardContainer}>
        {dataDonorAll.relatedCampaignsLoading ? renderSkeleton : renderCards}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    dataDonorAll: state.dataDonorAll,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRelatedCampaigns: (categoryId, campaignId) =>
      dispatch(getRelatedCampaigns(categoryId, campaignId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignDetailsDonateRelatedCampaing);
