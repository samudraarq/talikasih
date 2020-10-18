import styles from "./ButtonCreate.module.css";
import React from "react";


const ButtonCreate = () => {
    return(
        <div className={styles.container 
        }>
        <button className={styles.BtnCamp 
        }>CREATE CAMPAIGN</button>
        </div>
    )
  
};

export default ButtonCreate;
