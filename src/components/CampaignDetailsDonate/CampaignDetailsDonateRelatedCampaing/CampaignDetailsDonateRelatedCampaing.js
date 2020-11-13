import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getRelatedCampaigns } from "../../../redux/actions/donorActions";
import styles from "./CampaignDetailsDonateRelatedCampaing.module.css";
import CampaignCard from "../../CampaignCard/CampaignCard";
import SkeletonCard from "../../Skeleton/SkeletonCard";
import Container from "../../UI/Container";
import useWindowSize from "../../Hooks/useWindowResize";
import SideScroll from "../../UI/SideScroll";

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

  const [width] = useWindowSize();

  return (
    <>
      {width > 800 ? (
        <Container>
          <div className={styles.container}>
            <span className={styles.sectionsTitle}>Related campaign</span>
            <div className={styles.cardsContainer}>
              {dataDonorAll.relatedCampaignsLoading
                ? renderSkeleton
                : renderCards}
            </div>
          </div>
        </Container>
      ) : (
        <div className={styles.container}>
          <Container>
            <span className={styles.sectionsTitle}>Related campaign</span>
          </Container>
          <SideScroll>
            {dataDonorAll.relatedCampaignsLoading
              ? renderSkeleton
              : renderCards}
          </SideScroll>
        </div>
      )}
    </>
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
