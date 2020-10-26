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
      default:
        return;
    }
  };
  const classes = `${styles.skeleton} ${classType()}`;
  return <div className={classes}></div>;
};

export default SkeletonElements;
