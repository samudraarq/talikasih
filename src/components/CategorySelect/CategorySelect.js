import React from "react";
import { Link } from "react-router-dom";
import styles from "./CategorySelect.module.css";

import disabilityIcon from "../../assets/discover/disability.svg";
import medicalIcon from "../../assets/discover/medical.svg";
import educationIcon from "../../assets/discover/education.svg";
import religiousIcon from "../../assets/discover/religious.svg";
import humanityIcon from "../../assets/discover/humanity.svg";
import environmentIcon from "../../assets/discover/environment.svg";
import disasterIcon from "../../assets/discover/disaster.svg";
import sociopreneurIcon from "../../assets/discover/sociopreneur.svg";

const CategorySelect = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.headerText}>Find causes you truly care about</h2>
      <div className={styles.categoriesContainer}>
        <Link to="/discover/disability" className={styles.categoryBtn}>
          <img
            src={disabilityIcon}
            alt="disability"
            className={styles.categoryIcon}
          />
          <p className={styles.categoryText}>Disability</p>
        </Link>
        <div className={styles.categoryBtn}>
          <img
            src={medicalIcon}
            alt="medical"
            className={styles.categoryIcon}
          />
          <p className={styles.categoryText}>Medical</p>
        </div>
        <div className={styles.categoryBtn}>
          <img
            src={educationIcon}
            alt="education"
            className={styles.categoryIcon}
          />
          <p className={styles.categoryText}>Education</p>
        </div>
        <div className={styles.categoryBtn}>
          <img
            src={religiousIcon}
            alt="religious"
            className={styles.categoryIcon}
          />
          <p className={styles.categoryText}>Religious</p>
        </div>
        <div className={styles.categoryBtn}>
          <img
            src={humanityIcon}
            alt="humanity"
            className={styles.categoryIcon}
          />
          <p className={styles.categoryText}>Humanity</p>
        </div>
        <div className={styles.categoryBtn}>
          <img
            src={environmentIcon}
            alt="environment"
            className={styles.categoryIcon}
          />
          <p className={styles.categoryText}>Environment</p>
        </div>
        <div className={styles.categoryBtn}>
          <img
            src={disasterIcon}
            alt="disaster"
            className={styles.categoryIcon}
          />
          <p className={styles.categoryText}>Disaster</p>
        </div>
        <div className={styles.categoryBtn}>
          <img
            src={sociopreneurIcon}
            alt="sociopreneur"
            className={styles.categoryIcon}
          />
          <p className={styles.categoryText}>Sociopreneur</p>
        </div>
      </div>
    </div>
  );
};

export default CategorySelect;
