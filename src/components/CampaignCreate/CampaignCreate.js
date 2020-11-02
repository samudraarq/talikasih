import styles from "./CampaignCreate.module.css";
import React from "react";
import Form from "./CampaignCreateComponent/Form";

const CampaignCreate = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div>New Campaign</div>
      </div>
      <Form />
    </div>
  );
};

export default CampaignCreate;

// import HeaderImage from "./CampaignCreateComponent/HeaderImage";
// import Editor from "./CampaignCreateComponent/Editor";
// import ButtonCreate from "./CampaignCreateComponent/ButtonCreate";
/* <HeaderImage /> */
/* <Editor /> */
/* <ButtonCreate /> */
