import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./HeaderCategory.module.css";

import leftArrow from "../../../../assets/discover/left-arrow.svg";

import medicalImg from "../../../../assets/discover/medical-img.png";

const HeaderCategory = () => {
  const [badge, setBadge] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const { categoryId } = useParams();

  useEffect(() => {
    switch (categoryId) {
      case "1":
        setBadge("Disabilty");
        setText("Help them to get speedy recovery");
        setImage(medicalImg);
        break;
      case "2":
        setBadge("Medical");
        setText("Help them to get speedy recovery");
        setImage(medicalImg);
        break;
      case "3":
        setBadge("Education");
        setText("Help them to get speedy recovery");
        setImage(medicalImg);
        break;
      case "4":
        setBadge("Religious");
        setText("Help them to get speedy recovery");
        setImage(medicalImg);
        break;
      case "5":
        setBadge("Humanity");
        setText("Help them to get speedy recovery");
        setImage(medicalImg);
        break;
      case "6":
        setBadge("Environment");
        setText("Help them to get speedy recovery");
        setImage(medicalImg);
        break;
      case "7":
        setBadge("Disaster");
        setText("Help them to get speedy recovery");
        setImage(medicalImg);
        break;
      case "8":
        setBadge("Sociopreneur");
        setText("Help them to get speedy recovery");
        setImage(medicalImg);
        break;
      default:
        return;
    }
  }, [categoryId]);

  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.textContainer}>
          <span className={styles.categoryBadge}>{badge}</span>
          <p className={styles.categoryText}>{text}</p>
          <div className={styles.backlinkContainer}>
            <Link to="/discover" className={styles.backlinkText}>
              <img src={leftArrow} alt="left arrow" />
              <p>See all categories</p>
            </Link>
          </div>
        </div>
        <img src={image} alt="category" className={styles.categoryImg} />
      </div>
    </>
  );
};

export default HeaderCategory;
