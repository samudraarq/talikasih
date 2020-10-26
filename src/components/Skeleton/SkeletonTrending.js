import React from "react";
import Shimmer from "./Shimmer";
import styles from "./Skeleton.module.css";
import SkeletonElements from "./SkeletonElements";

const SkeletonTrending = () => {
  return (
    <div className={styles.skeletonWrapper}>
      <div className={styles.skeletonCard}>
        <div className={styles.container}>
          <h3 className={styles.segmentTitle}>Trending Topic</h3>
          <SkeletonElements type="title" />
          <div className={styles.content}>
            <SkeletonElements type="trendingThumbnail" />
            <div className={styles.quote}>
              <div>
                <SkeletonElements type="text" />
                <SkeletonElements type="text" />
                <SkeletonElements type="text" />
              </div>
              <div className={styles.fundraiser}>
                <SkeletonElements type="avatar" />
                <div>
                  <SkeletonElements type="text" />
                  <SkeletonElements type="text" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Shimmer />
    </div>
  );
};

export default SkeletonTrending;
