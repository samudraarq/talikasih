import React from "react";
import styles from "./CampaignCard.module.css";

import cardImg1 from "../../assets/homepage/Home/Card/Rectangle 25.png";

const CampaignCard = () => {
  const category = "Medical";
  const title = "Aid for necessary items to help our country";
  const progress = 70;
  const amountRaised = new Intl.NumberFormat("id-ID").format(30000000);
  const amountGoal = new Intl.NumberFormat("id-ID").format(50000000);

  return (
    <div className={styles.cardContainer}>
      <img src={cardImg1} alt="card" className={styles.cardImg} />
      <div className={styles.contentContainer}>
        <span className={styles.category}>{category}</span>
        <p className={styles.title}>{title}</p>
        <p className={styles.subtitle}>Aksi Cepat Tanggap</p>
        <div className={styles.progress}>
          <div
            className={styles.progressDone}
            style={{ width: `${progress}%`, opacity: "1" }}
          ></div>
        </div>
        <div className={styles.amountContainer}>
          <div>
            <p className={styles.raised}>Raised</p>
            <p className={styles.amountRaised}>IDR {amountRaised}</p>
          </div>
          <div>
            <p className={styles.goal}>Goal</p>
            <p className={styles.amountGoal}>IDR {amountGoal}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
