import React from "react";
import styles from "./Trending.module.css";

import openQuote from "../../../assets/homepage/Home/openQuote.svg";
import closeQuote from "../../../assets/homepage/Home/closeQuote.svg";

import trendingImage from "../../../assets/homepage/Home/Rectangle 33.png";
import fundraiser from "../../../assets/homepage/Home/Rectangle 37.png";

const Trending = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.segmentTitle}>Trending Topic</h3>
      <h2 className={styles.topicTitle}>Clean Water For Country Side Region</h2>
      <div className={styles.content}>
        <img
          src={trendingImage}
          alt="Trending"
          className={styles.trendingImage}
        />

        <div className={styles.quote}>
          <div>
            <img src={openQuote} alt="openQuote" className={styles.openQuote} />
            <p className={styles.quoteText}>
              Id praesent imperdiet lectus scelerisque id. Proin netus amet,
              viverra consequat consequat consectetur dignissim. Erat at
              volutpat et ac. Ullamcorper urna, elementum bibendum donec at
              mauris arcu, quam aenean.
            </p>
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
  );
};

export default Trending;
