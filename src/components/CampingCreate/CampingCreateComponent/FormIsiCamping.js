import styles from "./FormIsiCamping.module.css";
import React from "react";


const FormIsiCamping = () => {
    return(
        <div className={styles.container}>
        <div className={styles.cardkiri}>
          <label>
              Titel:<br></br>
              <input type="text"></input>
              </label>  
              <label>
              Goal:<br></br>
              <input type="text"></input>
              </label>  
        </div>
        <div className={styles.cardkanan}>
        <label>
        Category:<br></br>
              <input type="select"></input>
              </label>  
              <label>
              Due date:<br></br>
              <input type="date"></input>
              </label>  
        </div>
        </div>
    )
  
};

export default FormIsiCamping;
