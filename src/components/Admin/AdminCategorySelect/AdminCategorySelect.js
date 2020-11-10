import React from "react";

import styles from "./AdminCategorySelect.module.css";

import disabilityIcon from "../../../assets/discover/disability.svg";
import medicalIcon from "../../../assets/discover/medical.svg";
import educationIcon from "../../../assets/discover/education.svg";
import religiousIcon from "../../../assets/discover/religious.svg";
import humanityIcon from "../../../assets/discover/humanity.svg";
import environmentIcon from "../../../assets/discover/environment.svg";
import disasterIcon from "../../../assets/discover/disaster.svg";
import sociopreneurIcon from "../../../assets/discover/sociopreneur.svg";

const AdminCategorySelect = ({ setCategoryId, categoryId, setPage }) => {
  return (
    <>
      <h2 className={styles.headerText}>Filter by Categories</h2>
      <div>
        <div className={styles.categoriesContainer}>
          <button
            className={`${styles.categoryBtn} ${
              categoryId === 1 && styles.activeBtn
            }`}
            onClick={() => {
              setCategoryId(1);
              setPage(1);
            }}
          >
            <img
              src={disabilityIcon}
              alt="disability"
              className={styles.categoryIcon}
            />
            <p className={styles.categoryText}>Disability</p>
          </button>
          <button
            className={`${styles.categoryBtn} ${
              categoryId === 2 && styles.activeBtn
            }`}
            onClick={() => {
              setCategoryId(2);
              setPage(1);
            }}
          >
            <img
              src={medicalIcon}
              alt="medical"
              className={styles.categoryIcon}
            />
            <p className={styles.categoryText}>Medical</p>
          </button>
          <button
            className={`${styles.categoryBtn} ${
              categoryId === 3 && styles.activeBtn
            }`}
            onClick={() => {
              setCategoryId(3);
              setPage(1);
            }}
          >
            <img
              src={educationIcon}
              alt="education"
              className={styles.categoryIcon}
            />
            <p className={styles.categoryText}>Education</p>
          </button>
          <button
            className={`${styles.categoryBtn} ${
              categoryId === 4 && styles.activeBtn
            }`}
            onClick={() => {
              setCategoryId(4);
              setPage(1);
            }}
          >
            <img
              src={religiousIcon}
              alt="religious"
              className={styles.categoryIcon}
            />
            <p className={styles.categoryText}>Religious</p>
          </button>
          <button
            className={`${styles.categoryBtn} ${
              categoryId === 5 && styles.activeBtn
            }`}
            onClick={() => {
              setCategoryId(5);
              setPage(1);
            }}
          >
            <img
              src={humanityIcon}
              alt="humanity"
              className={styles.categoryIcon}
            />
            <p className={styles.categoryText}>Humanity</p>
          </button>
          <button
            className={`${styles.categoryBtn} ${
              categoryId === 6 && styles.activeBtn
            }`}
            onClick={() => {
              setCategoryId(6);
              setPage(1);
            }}
          >
            <img
              src={environmentIcon}
              alt="environment"
              className={styles.categoryIcon}
            />
            <p className={styles.categoryText}>Environment</p>
          </button>
          <button
            className={`${styles.categoryBtn} ${
              categoryId === 7 && styles.activeBtn
            }`}
            onClick={() => {
              setCategoryId(7);
              setPage(1);
            }}
          >
            <img
              src={disasterIcon}
              alt="disaster"
              className={styles.categoryIcon}
            />
            <p className={styles.categoryText}>Disaster</p>
          </button>
          <button
            className={`${styles.categoryBtn} ${
              categoryId === 8 && styles.activeBtn
            }`}
            onClick={() => {
              setCategoryId(8);
              setPage(1);
            }}
          >
            <img
              src={sociopreneurIcon}
              alt="sociopreneur"
              className={styles.categoryIcon}
            />
            <p className={styles.categoryText}>Sociopreneur</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminCategorySelect;
