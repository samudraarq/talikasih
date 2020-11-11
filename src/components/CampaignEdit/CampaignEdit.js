import React from "react";

import styles from "../CampaignCreate/CampaignCreate.module.css";
import EditForm from "./CampaignEditComponents/EditForm";

const CampaignEdit = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.title}>
          <div>Edit Campaign</div>
        </div>
        <EditForm />
      </div>
    </div>
  );
};

export default CampaignEdit;
