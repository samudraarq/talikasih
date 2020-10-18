import styles from "./CampaignCreate.module.css";
import React, { useState, Button } from "react";
import AddHeaderCamping from "./CampingCreateComponent/AddHeaderCamping";
import FormIsiCamping from "./CampingCreateComponent/FormIsiCamping";
import CkEditorCamping from "./CampingCreateComponent/CkEditorCamping";
import ButtonCreate from "./CampingCreateComponent/ButtonCreate";

const CampingCreate = () => {

  return (
    <div className={styles.container}>
      <div className={styles.titel}>
      <h1>New Camping</h1>
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

export default CampingCreate;
