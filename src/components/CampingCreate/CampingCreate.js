import styles from "./CampaignCreate.module.css";
import React, { useState, Button } from "react";
import AddHeaderCamping from "./CampingCreateComponent/AddHeaderCamping";
import FormIsiCamping from "./CampingCreateComponent/FormIsiCamping";
import CkEditorCamping from "./CampingCreateComponent/CkEditorCamping";

const CampingCreate = () => {

  return (
    <div className={styles.container}>
      <h1>New Camping</h1>
      <AddHeaderCamping/>
      <FormIsiCamping/>
      <CkEditorCamping/>
    </div>
  );
};

export default CampingCreate;
