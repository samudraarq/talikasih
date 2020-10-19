import React from 'react'
import styles from "./CampaignDetailsDonateAllComent.module.css";
import cardImg1 from "../../../assets/CampingDetails/Rectangle 25.png";
 const CampaignDetailsDonateAllComent = () => {
    return (
        <div className={styles.container}>          
        <div className={styles.wrapper}>
            {/* looping bagian ini */}
            <div className={styles.card}>
                
                <div className={styles.cardheader}>
                    <div className={styles.foto}>
                        <img src={cardImg1}></img>
                    </div>
                    <div className={styles.info}>
                    <h3>Rp. 320.000</h3>
                    <br></br>
                    <h5>justin junaidi</h5>
                    <p>12 miuit ago</p>
                    </div>
                </div>
                <div className={styles.cardbody}>
                   lorem ipsum jalj asjflkjsdfkjskdf sjdfkjsldfkjs fjhoiahdfoholisdhf hdfgihdfklgh ijufhgohj dfjgosjfo dfhjklsdfishdfoljsdl fjlskdjf;ljsdfi lskdf lj
                </div>
            </div>
            <div className={styles.card}>
                
                <div className={styles.cardheader}>
                    <div className={styles.foto}>
                        <img src={cardImg1}></img>
                    </div>
                    <div className={styles.info}>
                    <h3>Rp. 320.000</h3>
                    <br></br>
                    <h5>justin junaidi</h5>
                    <p>12 miuit ago</p>
                    </div>
                </div>
                <div className={styles.cardbody}>
                   lorem ipsum jalj asjflkjsdfkjskdf sjdfkjsldfkjs fjhoiahdfoholisdhf hdfgihdfklgh ijufhgohj dfjgosjfo dfhjklsdfishdfoljsdl fjlskdjf;ljsdfi lskdf lj
                </div>
            </div>
            <div className={styles.card}>
                
                <div className={styles.cardheader}>
                    <div className={styles.foto}>
                        <img src={cardImg1}></img>
                    </div>
                    <div className={styles.info}>
                    <h3>Rp. 320.000</h3>
                    <br></br>
                    <h5>justin junaidi</h5>
                    <p>12 miuit ago</p>
                    </div>
                </div>
                <div className={styles.cardbody}>
                   lorem ipsum jalj asjflkjsdfkjskdf sjdfkjsldfkjs fjhoiahdfoholisdhf hdfgihdfklgh ijufhgohj dfjgosjfo dfhjklsdfishdfoljsdl fjlskdjf;ljsdfi lskdf lj
                </div>
            </div>
            <div className={styles.card}>
                
                <div className={styles.cardheader}>
                    <div className={styles.foto}>
                        <img src={cardImg1}></img>
                    </div>
                    <div className={styles.info}>
                    <h3>Rp. 320.000</h3>
                    <br></br>
                    <h5>justin junaidi</h5>
                    <p>12 miuit ago</p>
                    </div>
                </div>
                <div className={styles.cardbody}>
                   lorem ipsum jalj asjflkjsdfkjskdf sjdfkjsldfkjs fjhoiahdfoholisdhf hdfgihdfklgh ijufhgohj dfjgosjfo dfhjklsdfishdfoljsdl lorem ipsum jalj asjflkjsdfkjskdf sjdfkjsldfkjs fjhoiahdfoholisdhf hdfgihdfklgh ijufhgohj dfjgosjfo dfhjklsdfishdfoljsdl fjlskdjf;ljsdfi lskdf lj lorem ipsum jalj asjflkjsdfkjskdf sjdfkjsldfkjs fjhoiahdfoholisdhf hdfgihdfklgh ijufhgohj dfjgosjfo dfhjklsdfishdfoljsdl fjlskdjf;ljsdfi lskdf lj fjlskdjf;ljsdfi lskdf lj
                </div>
            </div>
            {/* loping end */}
        </div>
        <div className={styles.btnwrap}>
            {/* button di taruh fungsi untuk menganti max slice */}
            <button className={styles.btnLoadmore}>LOAD MORE</button>
            </div>
        </div>
    )
}
export default CampaignDetailsDonateAllComent;
