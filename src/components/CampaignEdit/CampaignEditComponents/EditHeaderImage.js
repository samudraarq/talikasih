import React from "react";
import styles from "../../CampaignCreate/CampaignCreateComponent/HeaderImage.module.css";

const EditHeaderImage = ({ image }) => {
  return (
    <div className={styles.headerImage}>
      <label htmlFor="upload-button">
        <img
          src={image}
          alt="dummy"
          min-width="300"
          min-height="300"
          className={styles.image}
        />
      </label>
      <br />
    </div>
  );
};

export default EditHeaderImage;
