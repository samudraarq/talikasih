import styles from "./HeaderImage.module.css";
import React from "react";
import iconplus from "../../../assets/CampingCreate/Vector.png";

const HeaderImage = ({ image, setImage }) => {
  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  return (
    <div>
      <label htmlFor="upload-button">
        {image.preview ? (
          <img
            src={image.preview}
            alt="dummy"
            min-width="300"
            min-height="300"
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
      />
      <br />
    </div>
  );
};

export default HeaderImage;
