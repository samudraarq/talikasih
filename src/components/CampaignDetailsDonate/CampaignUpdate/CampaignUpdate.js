import React, { useState } from "react";
import styles from "./CampaignUpdate.module.css";
import { useForm } from "react-hook-form";
import { useQuill } from "react-quilljs";
import { connect } from "react-redux";
import qs from "qs";
import "quill/dist/quill.snow.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import close from "../../../assets/CampingCreate/close.png";

function CampaignUpdate({ auth, requestClose }) {
  // FORM //
  const [openAmount, setOpenAmount] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  let history = useHistory();

  const onSubmit = async (data) => {
    const inputText = quill.root.innerHTML;
    const dateToday = new Date();
    const campaignId = 1;
    try {
      const { ammount } = data;
      const updateInfo = qs.stringify({
        ammount,
        content: inputText,
        date: dateToday,
        StatusId: campaignId,
      });
      // console.log(updateInfo);
      const response = await axios({
        method: "post",
        url: "https://warm-tundra-23736.herokuapp.com/campaignLog/1",
        data: updateInfo,
        headers: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwibmFtZSI6ImpvaG4iLCJyb2xlIjoidXNlciIsImlhdCI6MTYwMzE5MzI5OX0.DqCMxWap7-rM7AdgRVo2yZnqDapQNjqG0aTo9s7v7d4",
          // token: auth.token,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error, "error");
    }
    history.push("/user/profile");
  };

  // Editor //
  const theme = "snow";
  const modules = {
    toolbar: [
      "bold",
      "italic",
      "underline",
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
      "image",
      "link",
    ],
  };
  const placeholder = "Tell your story...";
  const { quill, quillRef } = useQuill({
    theme,
    modules,
    placeholder,
  });

  return (
    <>
      <div className={styles.modal}>
        <div>Campaign Update</div>
        <img
          src={close}
          alt="close"
          className={styles.close}
          onClick={requestClose}
        />
      </div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.type}>
          <div onClick={() => setOpenAmount(false)}>
            <input type="radio" name="type" id="update" />
            <label htmlFor="update"> Recipient update</label>
          </div>
          <div onClick={() => setOpenAmount(true)}>
            <input type="radio" name="type" id="withdraw" />
            <label htmlFor="withdraw"> Fund withdrawal</label>
          </div>
          <div></div>
        </div>
        {openAmount ? (
          <div className={styles.col}>
            <label htmlFor="ammount" className={styles.amount}>
              Amount<span className={styles.mandatory}>*</span>
            </label>
            <input
              type="text"
              name="ammount"
              id="ammount"
              placeholder="20.000.000"
              className={styles.insert}
              ref={register({ required: true })}
            />
            {errors.ammount && errors.ammount.type === "required" && (
              <div className={styles.alert}>Required</div>
            )}
            <label htmlFor="content" className={styles.purpose}>
              Withdrawal purpose<span className={styles.mandatory}>*</span>
            </label>
          </div>
        ) : (
          <div className={styles.update}>
            <label htmlFor="content">
              Update<span className={styles.mandatory}>*</span>
            </label>
          </div>
        )}
        <div>
          <div
            ref={quillRef}
            style={{
              height: 300,
              width: 850,
              border: "none",
              backgroundColor: "#FCFCFC",
            }}
          />
          <div className={styles.sumbitBtn}>
            <input type="submit" value="submit" className={styles.sumbit} />
          </div>
        </div>
      </form>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(CampaignUpdate);
