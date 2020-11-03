import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getUserDonation } from "../../../redux/actions/authActions";
import DonationCard from "./DonationCard/DonationCard";
import styles from "./MyDonations.module.css";

const MyDonations = ({ auth, getUserDonation }) => {
  const [donationLimit, setDonationLimit] = useState(4);
  const [loadButton, setLoadButton] = useState(true);

  const token = auth.token;

  useEffect(() => {
    getUserDonation(token);
  }, [getUserDonation, token]);

  const donationNumber = auth.userDonation.Result?.length;
  const donations = donationNumber;

  const loadMore = () => {
    setDonationLimit();
    setLoadButton(false);
  };

  const showLess = () => {
    setDonationLimit(4);
    setLoadButton(true);
  };

  const renderDonationCard = auth.userDonation.Result?.slice(
    0,
    donationLimit
  ).map((donation) => <DonationCard donation={donation} key={donation.id} />);

  return (
    <div className={styles.donationContainer}>
      <h3 className={styles.title}>My Donations ({donations})</h3>
      {donationNumber === 0 && <p>You don't have any donation</p>}
      <div className={styles.donations}>{renderDonationCard}</div>
      {donationNumber > 4 && loadButton && (
        <button className={styles.loadBtn} onClick={loadMore}>
          Load more
        </button>
      )}

      {donationNumber > 4 && !loadButton && (
        <button className={styles.loadBtn} onClick={showLess}>
          Show less
        </button>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserDonation: (token) => dispatch(getUserDonation(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyDonations);
