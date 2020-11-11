import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import styles from "../CampaignCreate/CampaignCreate.module.css";
import EditForm from "./CampaignEditComponents/EditForm";

const CampaignEdit = () => {
  const [campaign, setCampaign] = useState(null);

  const { campaignId } = useParams();
  useEffect(() => {
    axios(`https://warm-tundra-23736.herokuapp.com/campaign/${campaignId}`)
      .then((res) => setCampaign(res.data.found))
      .catch((err) => console.log(err));
  }, [campaignId]);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.title}>
          <div>Edit Campaign</div>
        </div>
        {campaign && <EditForm campaign={campaign} />}
      </div>
    </div>
  );
};

export default CampaignEdit;
