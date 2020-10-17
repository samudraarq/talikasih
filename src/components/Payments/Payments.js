import React, { useState } from "react";
import styles from "./Payments.module.css";
import bank from "../../assets/Donate/bank.png";
import credit from "../../assets/Donate/credit.png";

function Payments({ formik, handleChange, onSubmit, validate }) {
  const [creditInfo, setCreditInfo] = useState(false);
  const [bankInfo, setBankInfo] = useState(false);

  const creditOption = () => {
    setBankInfo(false);
    setCreditInfo(true);
  };

  const BankOption = () => {
    setCreditInfo(false);
    setBankInfo(true);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>Payment</div>
        <div className={styles.paymentBtn}>
          <div className={styles.desc}>
            Select Payment<span className={styles.mandatory}>*</span>
          </div>
          <div className={styles.select}>
            <div>
              <input
                type="radio"
                name="payment"
                id="credit"
                onClick={creditOption}
              />
              <label className={styles.label} htmlFor="credit">
                <img src={bank} alt="Credit/Debit Card" />
                <div className={styles.option}>Credit/Debit Card</div>
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="payment"
                id="bank"
                onClick={BankOption}
              />
              <label className={styles.label} htmlFor="bank">
                <img src={credit} alt="Bank Transfer" />
                <div className={styles.option}>Bank Transfer</div>
              </label>
            </div>
          </div>
        </div>
        {creditInfo ? (
          <form action="" className={styles.form} onSubmit={onSubmit}>
            <div className={styles.number}>
              <label className={styles.desc} htmlFor="number">
                Card Number<span className={styles.mandatory}>*</span>
              </label>
              <input
                type="text"
                id="number"
                name="number"
                className={styles.input1}
                placeholder="e.g. 1234 5678 9012 3456"
                onChange={handleChange}
                value={formik.number}
              />
            </div>
            <div className={styles.date}>
              <label className={styles.desc} htmlFor="date">
                Expiry Date<span className={styles.mandatory}>*</span>
              </label>
              <input
                type="text"
                id="date"
                name="date"
                className={styles.input2}
                placeholder="MM/YY"
                onChange={handleChange}
                value={formik.date}
              />
            </div>
            <div className={styles.cvv}>
              <label className={styles.desc} htmlFor="cvv">
                CVV<span className={styles.mandatory}>*</span>
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                className={styles.input3}
                placeholder="123"
                onChange={handleChange}
                value={formik.cvv}
              />
            </div>
          </form>
        ) : (
          ""
        )}
        {bankInfo ? (
          <div className={styles.transferbox}>
            <div className={styles.transfer}>Transfer to</div>
            <div className={styles.row}>
              <div>
                <div className={styles.detailname}>Account Number</div>
                <div className={styles.detail}>1234 5678 90</div>
              </div>
              <div className={styles.detail}>COPY</div>
            </div>
            <div>
              <div className={styles.detailname}>Account Holder Name</div>
              <div className={styles.detail}>TaliKasih</div>
            </div>
            <div className={styles.row}>
              <div>
                <div className={styles.detailname}>Total Amount</div>
                <div className={styles.detail}>Rp.20,000,000</div>
              </div>
              <div className={styles.detail}>COPY</div>
            </div>
          </div>
        ) : (
          ""
        )}
        <button className={styles.donate} type="submit">
          donate
        </button>
      </div>
    </>
  );
}

export default Payments;
