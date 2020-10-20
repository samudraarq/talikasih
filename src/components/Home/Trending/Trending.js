import React, { useEffect } from "react";
import styles from "./Trending.module.css";
import { connect } from "react-redux";
import { getPopularCampaigns } from "../../../redux/actions/campaignActions";

import openQuote from "../../../assets/homepage/Home/openQuote.svg";
import closeQuote from "../../../assets/homepage/Home/closeQuote.svg";

// import trendingImage from "../../../assets/homepage/Home/Rectangle 33.png";
import fundraiser from "../../../assets/homepage/Home/Rectangle 37.png";

const Trending = ({ popularCampaign, getPopularCampaigns }) => {
  useEffect(() => {
    getPopularCampaigns(1);
  }, [getPopularCampaigns]);

  const trending = popularCampaign?.documents[0];

  return (
    <>
      {popularCampaign.loading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.container}>
          <h3 className={styles.segmentTitle}>Trending Topic</h3>
          <h2 className={styles.topicTitle}>{trending?.title}</h2>
          <div className={styles.content}>
            <img
              src={trending?.header_img}
              alt="Trending"
              className={styles.trendingImage}
            />

            <div className={styles.quote}>
              <div>
                <img
                  src={openQuote}
                  alt="openQuote"
                  className={styles.openQuote}
                />
                <p className={styles.quoteText}>{trending?.story}</p>
                <img
                  src={closeQuote}
                  alt="closeQuote"
                  className={styles.closeQuote}
                />
              </div>
              <div className={styles.fundraiser}>
                <img
                  src={fundraiser}
                  alt="fundraise"
                  className={styles.fundraiserImg}
                />
                <div>
                  <p className={styles.fundraiserName}>Dian Endang</p>
                  <p className={styles.fundraiserTitle}>Fundraiser</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    popularCampaign: state.popularCampaign,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPopularCampaigns: (page) => dispatch(getPopularCampaigns(page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Trending);
