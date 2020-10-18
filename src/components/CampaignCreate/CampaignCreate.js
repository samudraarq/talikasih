import styles from "./CampaignCreate.module.css";
import React, { useState, Button } from "react";
import AddHeaderCamping from "./CampaignCreateComponent/AddHeaderCamping";
import FormIsiCamping from "./CampaignCreateComponent/FormIsiCamping";
import CkEditorCamping from "./CampaignCreateComponent/CkEditorCamping";
import ButtonCreate from "./CampaignCreateComponent/ButtonCreate";

const CampaignCreate = () => {

  return (
    <div className={styles.container}>
      <div className={styles.titel}>
      <h1>New Campaign</h1>
      <br></br>
      <hr></hr>
      </div>
      <AddHeaderCamping/>
      <FormIsiCamping/>
      <CkEditorCamping/>
      <ButtonCreate/>
    </div>
  );
};

export default CampaignCreate;
