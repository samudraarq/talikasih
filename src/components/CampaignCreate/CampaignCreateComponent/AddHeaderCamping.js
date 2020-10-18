import styles from "./AddHeaderCamping.module.css";
import React, { useState,  } from "react";
import iconplus from "../../../assets/CampingCreate/Vector.png";
const AddHeaderCamping = () => {
  const [image, setImage] = useState({ preview: "", raw: "" });

  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image.raw);

    await fetch("YOUR_URL", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    });
  };

  return (
    <div className>
      <label htmlFor="upload-button">
        {image.preview ? (
          <img src={image.preview} alt="dummy" min-width="300" min-height="300" />
        ) : (
          <>
            <span className={styles.cardAtas}>
              <img className={styles.imageplus} src={iconplus}></img>
              <h1 className="text-center">Add Header Photo</h1>
            </span>
          </>
        )}
      </label>
      <input
        type="file"
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleChange}
      />
      <br />
    </div>
  );
};

export default AddHeaderCamping;
