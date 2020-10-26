import React from "react";
import styles from "./Skeleton.module.css";

const SkeletonElements = ({ type }) => {
  const classType = () => {
    switch (type) {
      case "text":
        return styles.text;
      case "title":
        return styles.title;
      case "thumbnail":
        return styles.thumbnail;
      case "trendingThumbnail":
        return styles.trendingThumbnail;
      case "avatar":
        return styles.avatar;
      default:
        return;
    }
  };
  const classes = `${styles.skeleton} ${classType()}`;
  return <div className={classes}></div>;
};

export default SkeletonElements;
