// import { Form } from 'formik'
import React from 'react'
import styles from "./CampaingDetailsDonateBigCard.module.css";
import cardImg1 from "../../../assets/CampingDetails/Rectangle 25.png";

export const CampaingDetailsDonateBigCard = () => {

    const progress = 70;
    return (
        <div className={styles.container}>
            <div className={styles.cardKiri}>
            <h1>Aid for necessary items to help our country</h1>
            <img src={cardImg1}></img>

            </div>


            <div className={styles.cardKanan}>
                <h1>IDR 30.000.000</h1>
                <h4>From IDR 50.000.000 goal</h4>
                <div className={styles.progress}>
                <div
                    className={styles.progressDone}
                    style={{ width: `${progress}%`, opacity: "1" }}
                ></div>
                </div>

                <div className={styles.profilContainer}>
                    <img src={cardImg1}></img>
                    <div className={styles.profilName}>
                        <h3>Dian endang</h3>
                        <h4>Fundraiser</h4>
                    </div>
                </div>
                <div className={styles.dataCount}>
                <div>
                    <h1>12</h1>
                    <p>Days left</p>
                </div>
                <div>
                    <h1>132</h1>
                    <p>Donations</p>
                </div>
                <div>
                    <h1>232</h1>
                    <p>Share</p>
                </div>
                </div>


                <button className={styles.btnShare} >Share</button>
               
                <button className={styles.btnDonate} >Donate</button>
                </div>
        </div>
    )
}
