import React from "react";
import styles from "../../CampaignCreate/HeaderImage.module.css";

import iconplus from "../../../assets/CampingCreate/Vector.png";

const EditHeaderImage = ({ image, setImage, register, errors }) => {
  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  return (
    <div className={styles.headerImage}>
      <label htmlFor="upload-button">
        {image.preview ? (
          <img
            src={image.preview}
            alt="dummy"
            min-width="300"
            min-height="300"
            className={styles.image}
          />
        ) : (
          <span className={styles.cardAtas}>
            <img className={styles.imageplus} src={iconplus} alt="header" />
            <div className={styles.textCenter}>Add Header Photo</div>
          </span>
        )}
      </label>
      <input
        type="file"
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleChange}
        name="header_img"
        ref={register({ required: true })}
      />
      {errors.header_img && errors.header_img.type === "required" && (
        <div className={styles.alert}>Required</div>
      )}
      <br />
    </div>
  );
};

export default EditHeaderImage;
