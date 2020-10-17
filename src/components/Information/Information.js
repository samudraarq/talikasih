import React from "react";
import styles from "./Information.module.css";

function Information({
  formik,
  handleChange,
  validationSchema,
  onBlur,
  onTouched,
}) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>Donation</div>
        <div className={styles.row}>
          <form action="" className={styles.form}>
            <label className={styles.desc} htmlFor="amount">
              Amount
              <span className={styles.mandatory}>*</span>
            </label>
            <input
              type="text"
              id="amount"
              name="amount"
              placeholder="20.000.000"
              className={styles.input1}
              onChange={handleChange}
              value={formik.amount}
              onBlur={onBlur}
            />
            {validationSchema.amount && onTouched.amount ? (
              <div className={styles.alert}>{validationSchema.amount}</div>
            ) : null}
            <label className={styles.desc} htmlFor="name">
              Name
              <span className={styles.mandatory}>*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={styles.input2}
              placeholder="Your Name Here"
              onChange={handleChange}
              value={formik.name}
              onBlur={onBlur}
            />
            {validationSchema.name && onTouched.name ? (
              <div className={styles.alert}>{validationSchema.name}</div>
            ) : null}
            <div className={styles.check}>
              <input
                type="checkbox"
                name="anonym"
                className={styles.checkbox}
              />
              <div className={styles.anonym}> Set as anonymus</div>
            </div>
            <label className={styles.desc} htmlFor="message">
              Message <span className={styles.optional}>(Optional)</span>
            </label>
            <input
              type="text"
              id="message"
              name="message"
              placeholder="Give them support!"
              className={styles.input3}
              onChange={handleChange}
              value={formik.message}
              onBlur={onBlur}
            />
          </form>
          <div>{/* Card */}</div>
        </div>
      </div>
    </>
  );
}

export default Information;
