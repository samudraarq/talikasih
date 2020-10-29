import React from "react";
import { Link } from "react-router-dom";
import styles from "./CampaignCard.module.css";

const CampaignCard = ({ campaign }) => {
  const category = campaign.Category.name;
  const title = campaign.title;
  const raised = campaign.raised;
  const goal = campaign.goal;
  const countProgress = () => {
    if (raised / goal <= 1) {
      return (raised / goal) * 100;
    } else {
      return 100;
    }
  };
  const progress = countProgress();
  const amountRaised = new Intl.NumberFormat("id-ID").format(raised);
  const amountGoal = new Intl.NumberFormat("id-ID").format(goal);

  return (
    <Link
      to={`/campaign/details/donate/${campaign.id}`}
      style={{ textDecoration: "none" }}
    >
      <div className={styles.cardContainer}>
        <img src={campaign.header_img} alt="card" className={styles.cardImg} />
        <div className={styles.contentContainer}>
          <div>
            <span className={styles.category}>{category}</span>
            <p className={styles.title}>{title}</p>
            <p className={styles.subtitle}>Aksi Cepat Tanggap</p>
          </div>
          <div>
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
      </div>
    </Link>
  );
};

export default CampaignCard;
