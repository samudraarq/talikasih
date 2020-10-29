import React from "react";
import Shimmer from "./Shimmer";
import styles from "./Skeleton.module.css";
import SkeletonElements from "./SkeletonElements";

const SkeletonCard = () => {
  return (
    <div className={styles.skeletonWrapper}>
      <div className={styles.skeletonCard}>
        <div className={styles.cardContainer}>
          <SkeletonElements type="thumbnail" />
          <div className={styles.contentContainer}>
            <div>
              <SkeletonElements type="title" />
              <SkeletonElements type="text" />
              <SkeletonElements type="text" />
              <SkeletonElements type="text" />
            </div>
            <div>
              <SkeletonElements type="text" />
              <div className={styles.amountContainer}>
                <div>
                  <SkeletonElements type="text" />
                  <SkeletonElements type="text" />
                </div>
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

export default SkeletonCard;
