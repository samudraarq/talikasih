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
        <Link to="/discover/category/1" className={styles.categoryBtn}>
         <img
            src={disabilityIcon}
            alt="disability"
            className={styles.categoryIcon}
          />
          <p className={styles.categoryText}>Disability</p>
        </Link>
        <Link to="/discover/category/2" className={styles.categoryBtn}>
          <img
            src={medicalIcon}
            alt="medical"
            className={styles.categoryIcon}
          />
          <p className={styles.categoryText}>Medical</p>
        </Link>
        <Link to="/discover/category/3" className={styles.categoryBtn}>
          <img
            src={educationIcon}
            alt="education"
            className={styles.categoryIcon}
          />
          <p className={styles.categoryText}>Education</p>
        </Link>
        <Link to="/discover/category/4" className={styles.categoryBtn}>
          <img
            src={religiousIcon}
            alt="religious"
            className={styles.categoryIcon}
          />
          <p className={styles.categoryText}>Religious</p>
        </Link>
        <Link to="/discover/category/5" className={styles.categoryBtn}>
          <img
            src={humanityIcon}
            alt="humanity"
            className={styles.categoryIcon}
          />
          <p className={styles.categoryText}>Humanity</p>
        </Link>
        <Link to="/discover/category/6" className={styles.categoryBtn}>
          <img
            src={environmentIcon}
            alt="environment"
            className={styles.categoryIcon}
          />
          <p className={styles.categoryText}>Environment</p>
        </Link>
        <Link to="/discover/category/7" className={styles.categoryBtn}>
          <img
            src={disasterIcon}
            alt="disaster"
            className={styles.categoryIcon}
          />
          <p className={styles.categoryText}>Disaster</p>
        </Link>
        <Link to="/discover/category/8" className={styles.categoryBtn}>
          <img
            src={sociopreneurIcon}
            alt="sociopreneur"
            className={styles.categoryIcon}
          />
          <p className={styles.categoryText}>Sociopreneur</p>
        </Link>
      </div>
    </div>
  );
};

export default CategorySelect;
