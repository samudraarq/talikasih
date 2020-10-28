import React from "react";
import moment from "moment";
import styles from "./DonationCard.module.css";

const DonationCard = ({ donation }) => {
  const timePast = moment(donation.createdAt).fromNow();
  const title = donation.Campaign.title;
  const amount = new Intl.NumberFormat("id-ID").format(donation.amount);
  const content = donation.comment;

  return (
    <div className={styles.cardContainer}>
      <p className={styles.time}>{timePast}</p>
      <p className={styles.cardTitle}>{title}</p>
      <p className={styles.amount}>Rp. {amount}</p>
      <p className={styles.content}>{content}</p>
    </div>
  );
};

export default DonationCard;
