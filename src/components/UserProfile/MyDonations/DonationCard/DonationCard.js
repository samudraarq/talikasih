import React from "react";
import moment from "moment";
import styles from "./DonationCard.module.css";

const DonationCard = () => {
  const timePast = moment("2020-10-18 16:30:26").fromNow();
  const title = "Aid for necessary items to help our country";
  const amount = new Intl.NumberFormat("id-ID").format(30000000);
  const content =
    "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nunc pellentesque enim ultrices nunc. Pretium massa, vel viverra id mi sed sit. In faucibus leo etiam cras elit malesuada augue. In faucibus leo etiam cras elit malesuada augue";

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
