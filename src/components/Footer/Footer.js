import React from "react";
import styles from "./Footer.module.css";

import logo from "../../assets/general/logo.svg";

const Footer = () => {
  return (
    <>
      <div className={styles.borderBottom}>
        <div className={styles.container}>
          <div className={styles.footerContainer}>
            <img src={logo} alt="logo" className={styles.logo} />
            <div className={styles.footerLinkContainer}>
              <div className={styles.footerLink}>
                <h4>Fundraise for</h4>
                <ul>
                  <li>Education</li>
                  <li>Disabilities</li>
                  <li>Hospital Bills</li>
                  <li>Religious</li>
                </ul>
              </div>
              <div className={styles.footerLink}>
                <h4>Learn More</h4>
                <ul>
                  <li>How we can help</li>
                  <li>FAQ</li>
                  <li>Blog</li>
                </ul>
              </div>
              <div className={styles.footerLink}>
                <h4>Resources</h4>
                <ul>
                  <li>Contact Us</li>
                  <li>About</li>
                  <li>Careers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <p className={styles.copyright}>
          TaliKasih &#169; 2020. All rights reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
