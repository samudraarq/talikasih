import React from 'react'
import styles from "./CampaignDetailsDonateComentFrom.module.css";
export const CampaignDetailsDonateComentFrom = () => {
    return (
        <div className={styles.container}>
            <h1>Comments (11)</h1>
            <form>
            <textarea>
            Hello there, this is some text in a text area
            </textarea>

            </form>
            <div className={styles.btnwraper}>
            <button className={styles.btnpost}>POST</button>
            </div>
        </div>
    )
}
