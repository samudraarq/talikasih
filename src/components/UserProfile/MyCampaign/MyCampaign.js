import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getUserCampaign } from "../../../redux/actions/authActions";
import styles from "./MyCampaign.module.css";

import CampaignCard from "../../CampaignCard/CampaignCard";

const MyCampaign = ({ auth, getUserCampaign }) => {
  const [campaignLimit, setCampaignLimit] = useState(4);
  const [loadButton, setLoadButton] = useState(true);

  const token = auth.token;

  useEffect(() => {
    getUserCampaign(token);
  }, [getUserCampaign, token]);

  const campaignNumber = auth.userCampaign.campaign_created;
  const campaigns = campaignNumber;

  const renderCampaignCard = auth.userCampaign.result
    ?.slice(0, campaignLimit)
    .map((campaign) => <CampaignCard campaign={campaign} key={campaign.id} />);

  const loadMore = () => {
    setCampaignLimit();
    setLoadButton(false);
  };

  const showLess = () => {
    setCampaignLimit(4);
    setLoadButton(true);
  };

  return (
    <div className={styles.campaignContainer}>
      <h3 className={styles.title}>My Campaigns ({campaigns})</h3>
      {campaignNumber === 0 && <p>You don't have any campaign</p>}
      <div className={styles.campaigns}>{renderCampaignCard}</div>
      {campaignNumber > 4 && loadButton && (
        <button className={styles.loadBtn} onClick={loadMore}>
          Load more
        </button>
      )}

      {campaignNumber > 4 && !loadButton && (
        <button className={styles.loadBtn} onClick={showLess}>
          Show less
        </button>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserCampaign: (token) => dispatch(getUserCampaign(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyCampaign);
