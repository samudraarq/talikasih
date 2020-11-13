import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getNewCampaigns } from "../../../redux/actions/campaignActions";

import CampaignCard from "../../CampaignCard/CampaignCard";
import styles from "./NewCampaign.module.css";

import SkeletonCard from "../../Skeleton/SkeletonCard";
import Container from "../../UI/Container";
import useWindowSize from "../../Hooks/useWindowResize";
import SideScroll from "../../UI/SideScroll";

const NewCampaign = ({ newCampaign, getNewCampaigns }) => {
  useEffect(() => {
    getNewCampaigns(1);
  }, [getNewCampaigns]);

  const renderCards = newCampaign?.documents
    .slice(0, 3)
    .map((campaign) => <CampaignCard campaign={campaign} key={campaign.id} />);

  const renderSkeleton = [1, 2, 3].map((n) => <SkeletonCard key={n} />);

  const [width] = useWindowSize();

  return (
    <>
      {width > 800 ? (
        <Container>
          <h3 className={styles.segmentTitle}>New</h3>
          <h2 className={styles.topicTitle}>
            The latest people who need your help
          </h2>
          <div className={styles.cardsContainer}>
            {newCampaign.loading ? renderSkeleton : renderCards}
          </div>
        </Container>
      ) : (
        <>
          <Container>
            <h3 className={styles.segmentTitle}>New</h3>
            <h2 className={styles.topicTitle}>
              The latest people who need your help
            </h2>
          </Container>
          <SideScroll>
            {newCampaign.loading ? renderSkeleton : renderCards}
          </SideScroll>
        </>
      )}
    </>
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
