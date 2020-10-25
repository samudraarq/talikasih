import React, { useState } from "react";
import { useForm } from "react-hook-form";
import bank from "../../assets/Donate/bank.png";
import credit from "../../assets/Donate/credit.png";
import styles from "./Donate.module.css";
import qs from "qs";
import axios from "axios";

// -------------------- //

function Donate() {
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
  });
  const [creditInfo, setCreditInfo] = useState(false);
  const [bankInfo, setBankInfo] = useState(false);

  // -------------------- //

  const onSubmit = async (values) => {
    console.log(values);
    try {
      const { amount, comment, share } = values;
      const donateInfo = qs.stringify({
        amount,
        comment,
        share: true,
      });
      console.log(donateInfo);
      const submit = await axios({
        method: "post",
        url: "https://warm-tundra-23736.herokuapp.com/donate/campaign/2",
        data: donateInfo,
        headers: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwibmFtZSI6ImpvaG4iLCJyb2xlIjoidXNlciIsImlhdCI6MTYwMzE5MzI5OX0.DqCMxWap7-rM7AdgRVo2yZnqDapQNjqG0aTo9s7v7d4",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }).then(() => console.log("success"));
    } catch (error) {
      console.log(error.message);
    }
  };

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
  // -------------------- //

  return (
    <>
      <div className={styles.container}>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.title}>Donation</div>
          <div className={styles.row}>
            <div className={styles.donateform}>
              <label className={styles.desc} htmlFor="amount">
                Amount
                <span className={styles.mandatory}>*</span>
              </label>
              <input
                type="text"
                id="amount"
                name="amount"
                placeholder="20.000.000"
                className={styles.amount}
                ref={register({ required: true })}
              />
              {errors.amount && errors.amount.type === "required" && (
                <div className={styles.alert}>Required</div>
              )}
              <label className={styles.desc} htmlFor="name">
                Name
                <span className={styles.mandatory}>*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={styles.name}
                placeholder="Your Name Here"
                ref={register({ required: true })}
              />
              {errors.name && <div className={styles.alert}>Required</div>}
              <div className={styles.check}>
                <input
                  type="checkbox"
                  name="anonym"
                  className={styles.checkbox}
                  ref={register}
                />
                <div className={styles.anonym}> Set as anonymus</div>
              </div>
              <label className={styles.desc} htmlFor="comment">
                Message <span className={styles.optional}>(Optional)</span>
              </label>
              <textarea
                type="text"
                id="comment"
                name="comment"
                placeholder="Give them support!"
                className={styles.message}
                ref={register}
              />
            </div>
            <div>{/* Card */}</div>
          </div>
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
            <div action="" className={styles.form}>
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
                  ref={register({
                    required: true,
                    minLength: 13,
                    maxLength: 19,
                  })}
                />
                {errors.number && errors.number.type === "required" && (
                  <div className={styles.alert}>Required</div>
                )}
                {errors.number && errors.number.type === "minLength" && (
                  <div className={styles.alert}>Credit Card Number Invalid</div>
                )}
                {errors.number && errors.number.type === "maxLength" && (
                  <div className={styles.alert}>Credit Card Number Invalid</div>
                )}
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
                  ref={register({
                    required: true,
                    pattern: /([0-9]{2})\/([0-9]{2})/,
                  })}
                />
                {errors.date && errors.date.type === "required" && (
                  <div className={styles.alert}>Required</div>
                )}
                {errors.date && errors.date.type === "pattern" && (
                  <div className={styles.alert}>Expiry Date Invalid</div>
                )}
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
                  ref={register({
                    required: true,
                    minLength: 3,
                    maxLength: 3,
                  })}
                />
                {errors.cvv && errors.cvv.type === "required" && (
                  <div className={styles.alert}>Required</div>
                )}
                {errors.cvv && errors.cvv.type === "minLength" && (
                  <div className={styles.alert}>CVV Invalid</div>
                )}
                {errors.cvv && errors.cvv.type === "maxLength" && (
                  <div className={styles.alert}>CVV Invalid</div>
                )}
              </div>
            </div>
          ) : (
            ""
          )}
          {bankInfo ? (
            <div className={styles.transferbox}>
              <div className={styles.transfer}>Transfer to</div>
              <div className={styles.info}>
                <div className={styles.detailname}>Account Number</div>
                <div action="" className={styles.form}>
                  <input
                    type="text"
                    value="1234 5678 90"
                    id="account"
                    className={styles.detailnum}
                  />
                  <button className={styles.copy} onClick={(e) => account(e)}>
                    copy
                  </button>
                </div>
              </div>
              <div className={styles.info}>
                <div className={styles.detailname}>Account Holder Name</div>
                <div className={styles.detail}>TaliKasih</div>
              </div>
              <div className={styles.info}>
                <div className={styles.detailname}>Total Amount</div>
                <div action="" className={styles.form}>
                  <input
                    type="text"
                    value="Rp. 20,000,000"
                    id="total"
                    className={styles.detailnum}
                  />
                  <button className={styles.copy} onClick={(e) => total(e)}>
                    copy
                  </button>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          <input className={styles.donate} type="submit" value="donate" />
        </form>
      </div>
    </>
  );
}

export default Donate;
