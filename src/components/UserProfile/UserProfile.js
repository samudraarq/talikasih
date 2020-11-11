import React from "react";
import MyCampaign from "./MyCampaign/MyCampaign";
import MyDonations from "./MyDonations/MyDonations";
import MyProfile from "./MyProfile/MyProfile";
import styles from "./UserProfile.module.css";
import Container from "../UI/Container";

const UserProfile = () => {
  return (
    <Container>
      <div className={styles.container}>
        <div className={styles.segment}>
          <MyProfile />
        </div>
        <div className={styles.segment}>
          <MyDonations />
        </div>
        <div className={styles.segment}>
          <MyCampaign />
        </div>
      </div>
    </Container>
  );
};

export default UserProfile;
