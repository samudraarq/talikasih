import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./HeaderCategory.module.css";

import leftArrow from "../../../../assets/discover/left-arrow.svg";

import disabilityImg from "../../../../assets/discover/header-img/disabilty-img.jpg";
import medicalImg from "../../../../assets/discover/header-img/medicall-img.jpg";
import educationImg from "../../../../assets/discover/header-img/education-img.jpg";
import religiousImg from "../../../../assets/discover/header-img/religion-img.jpg";
import humanityImg from "../../../../assets/discover/header-img/humanity-img.jpg";
import environmentImg from "../../../../assets/discover/header-img/environment-img.jpg";
import disasterImg from "../../../../assets/discover/header-img/disaster-img.jpg";
import sociopreneurImg from "../../../../assets/discover/header-img/sociopreneur-img.jpg";

const HeaderCategory = () => {
  const [badge, setBadge] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const { categoryId } = useParams();

  useEffect(() => {
    switch (categoryId) {
      case "1":
        setBadge("Disabilty");
        setText("Your little kindness is precious");
        setImage(disabilityImg);
        break;
      case "2":
        setBadge("Medical");
        setText("Your little kindness is precious");
        setImage(medicalImg);
        break;
      case "3":
        setBadge("Education");
        setText("Your little kindness is precious");
        setImage(educationImg);
        break;
      case "4":
        setBadge("Religious");
        setText("Your little kindness is precious");
        setImage(religiousImg);
        break;
      case "5":
        setBadge("Humanity");
        setText("Your little kindness is precious");
        setImage(humanityImg);
        break;
      case "6":
        setBadge("Environment");
        setText("Your little kindness is precious");
        setImage(environmentImg);
        break;
      case "7":
        setBadge("Disaster");
        setText("Your little kindness is precious");
        setImage(disasterImg);
        break;
      case "8":
        setBadge("Sociopreneur");
        setText("Your little kindness is precious");
        setImage(sociopreneurImg);
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
