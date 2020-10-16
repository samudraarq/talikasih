import React, { useState } from "react";
import styles from "./Information.module.css";

function Information({ donation, setDonation }) {
  const [state, setState] = useState("");
  const [alertAmount, setAlertAmount] = useState("");
  const [alertName, setAlertName] = useState("");

  const handleAmount = (e) => {
    e.preventDefault();
    setState(e.target.value);
    // console.log(e.target.value);
    if (state !== "") {
      setAlertAmount("Amount can't be empty");
    } else {
      setAlertAmount("");
    }
    setDonation({ ...donation, [e.target.name]: e.target.value });
  };
  const handleName = (e) => {
    e.preventDefault();
    setState(e.target.value);
    setDonation({ ...donation, [e.target.name]: e.target.value });
    if (state !== "") {
      setAlertName("Name can't be empty");
    } else {
      setAlertName("");
    }
  };

  const handleMessage = (e) => {
    setDonation({ ...donation, [e.target.name]: e.target.value });
    console.log(donation);
  };

  const handleAnonym = (e) => {
    setDonation({ ...donation, [e.target.name]: true });
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>Donation</div>
        <div className={styles.row}>
          <form action="" className={styles.form}>
            <label className={styles.desc}>
              Amount
              <span className={styles.mandatory}>*</span>
            </label>
            <input
              type="text"
              name="amount"
              onBlur={(e) => handleAmount(e)}
              placeholder="20.000.000"
              className={styles.input1}
            />
            <span className={styles.alert}>{alertAmount}</span>
            <label className={styles.desc}>
              Name
              <span className={styles.mandatory}>*</span>
            </label>
            <input
              type="text"
              name="name"
              onBlur={(e) => handleName(e)}
              className={styles.input2}
              placeholder="Your Name Here"
            />
            <span className={styles.alert}>{alertName}</span>
            <div className={styles.check}>
              <input
                type="checkbox"
                name="anonym"
                onClick={(e) => handleAnonym(e)}
                className={styles.checkbox}
              />
              <span className={styles.anonym}>Set as anonymus</span>
            </div>
            <label className={styles.desc}>
              Message <span className={styles.optional}>(Optional)</span>
            </label>
            <input
              type="text"
              name="message"
              placeholder="Give them support!"
              className={styles.input3}
              onBlur={(e) => handleMessage(e)}
            />
          </form>
          <div>{/* Card */}</div>
        </div>
      </div>
    </>
  );
}

export default Information;
