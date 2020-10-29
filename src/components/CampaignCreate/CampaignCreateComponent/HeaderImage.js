import styles from "./HeaderImage.module.css";
import React, { useState } from "react";
import iconplus from "../../../assets/CampingCreate/Vector.png";
import ConnectForm from "./ConnectForm";

const HeaderImage = () => {
  const [image, setImage] = useState({ preview: "", raw: "" });

  const handleChange = (e) => {
    // console.log(e.target.files);
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };
  // console.log(image);

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
    <div>
      <ConnectForm>
        <label htmlFor="upload-button" className={styles.image}>
          {image.preview ? (
            <img
              src={image.preview}
              alt="dummy"
              min-width="300"
              min-height="300"
            />
          ) : (
            <>
              <span className={styles.cardAtas}>
                <img className={styles.imageplus} src={iconplus}></img>
                <div className={styles.textCenter}>Add Header Photo</div>
              </span>
            </>
          )}
        </label>
        {({ register }) => (
          <input
            type="file"
            id="upload-button"
            style={{ display: "none" }}
            onChange={handleChange}
            ref={register}
            name="header_img"
          />
        )}
        <br />
      </ConnectForm>
    </div>
  );
};

export default HeaderImage;
