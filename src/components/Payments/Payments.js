import React, { useState } from "react";
import styles from "./Payments.module.css";
import bank from "../../assets/Donate/bank.png";
import credit from "../../assets/Donate/credit.png";

function Payments({
  formik,
  handleChange,
  submitForm,
  validationSchema,
  onBlur,
  onTouched,
  setSubmitting,
}) {
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

  const account = (e) => {
    e.preventDefault();
    const detailnum = document.getElementById("account");
    detailnum.select();
    detailnum.setSelectionRange(0, 99999);
    document.execCommand("copy");
    // alert("Account number copied!");
    console.log(detailnum.value);
  };

  const total = (e) => {
    e.preventDefault();
    const detailnum = document.getElementById("total");
    detailnum.select();
    detailnum.setSelectionRange(0, 99999);
    document.execCommand("copy");
    // alert("Total amount copied!");
    console.log(detailnum.value);
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
          <form action="" className={styles.form} onSubmit={submitForm}>
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
                onBlur={onBlur}
              />
              {validationSchema.number && onTouched.number ? (
                <div className={styles.alert}>{validationSchema.number}</div>
              ) : null}
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
                onBlur={onBlur}
              />
              {validationSchema.date && onTouched.date ? (
                <div className={styles.alert}>{validationSchema.date}</div>
              ) : null}
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
                onBlur={onBlur}
              />
              {validationSchema.cvv && onTouched.cvv ? (
                <div className={styles.alert}>{validationSchema.cvv}</div>
              ) : null}
            </div>
          </form>
        ) : (
          ""
        )}
        {bankInfo ? (
          <div className={styles.transferbox}>
            <div className={styles.transfer}>Transfer to</div>
            <div className={styles.info}>
              <div className={styles.detailname}>Account Number</div>
              <form action="" className={styles.form}>
                <input
                  type="text"
                  value="1234 5678 90"
                  id="account"
                  className={styles.detailnum}
                />
                <button className={styles.copy} onClick={(e) => account(e)}>
                  copy
                </button>
              </form>
            </div>
            <div className={styles.info}>
              <div className={styles.detailname}>Account Holder Name</div>
              <div className={styles.detail}>TaliKasih</div>
            </div>
            <div className={styles.info}>
              <div className={styles.detailname}>Total Amount</div>
              <form action="" className={styles.form}>
                <input
                  type="text"
                  value="Rp. 20,000,000"
                  id="total"
                  className={styles.detailnum}
                />
                <button className={styles.copy} onClick={(e) => total(e)}>
                  copy
                </button>
              </form>
            </div>
          </div>
        ) : (
          ""
        )}
        <button
          className={styles.donate}
          type="submit"
          onClick={submitForm}
          disabled={setSubmitting}
        >
          donate
        </button>
      </div>
    </>
  );
}

export default Payments;
