import React from "react";
import DonationCard from "./DonationCard/DonationCard";
import styles from "./MyDonations.module.css";

const MyDonations = () => {
  const donations = 23;
  return (
    <div className={styles.donationContainer}>
      <h3 className={styles.title}>My Donations ({donations})</h3>
      <div className={styles.donations}>
        <DonationCard />
        <DonationCard />
        <DonationCard />
        <DonationCard />
      </div>
      <button className={styles.loadBtn}>Load more</button>
    </div>
  );
};

export default MyDonations;
