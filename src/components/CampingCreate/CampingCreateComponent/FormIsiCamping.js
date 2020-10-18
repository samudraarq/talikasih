import styles from "./FormIsiCamping.module.css";
import React from "react";


const FormIsiCamping = () => {
    return(
        <div>
        <div className={styles.cardkiri}>
          <label>
              titel:
              <input type="text"></input>
              </label>  
              <label>
              Category:
              <input type="text"></input>
              </label>  
        </div>
        <div className={styles.cardkanan}>
        <label>
              Goal:
              <input type="text"></input>
              </label>  
              <label>
              Due date:
              <input type="date"></input>
              </label>  
        </div>
        </div>
    )
  
};

export default FormIsiCamping;
