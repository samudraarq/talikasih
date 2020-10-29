import React, { useState } from "react";
import styles from "./CampaignUpdate.module.css";
import { useForm } from "react-hook-form";
import { useQuill } from "react-quilljs";
import { connect } from "react-redux";
import qs from "qs";
import "quill/dist/quill.snow.css";
import axios from "axios";

function CampaignUpdate({ auth }) {
  // FORM //
  const [openAmount, setOpenAmount] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const { ammount, content } = data;
      const updateInfo = qs.stringify({
        ammount,
        content,
        date: new Date(),
      });
      console.log(updateInfo);
      const response = await axios({
        method: "post",
        url: "https://warm-tundra-23736.herokuapp.com/campaignLog/1",
        data: updateInfo,
        headers: {
          token: auth.token,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error, "error");
    }
    // setOpen(false);
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

  const { quillRef } = useQuill({
    theme,
    modules,
    placeholder,
  });

  return (
    <>
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
          </div>
        ) : (
          ""
        )}
        <div className={styles.col}>
          <label htmlFor="purpose" className={styles.purpose}>
            Withdrawal purpose<span className={styles.mandatory}>*</span>
          </label>
          <div
            ref={quillRef}
            // ref={register({ required: true })}
            name="purpose"
            id="purpose"
            style={{
              height: 300,
              width: 850,
              border: "none",
              backgroundColor: "#FCFCFC",
            }}
          />
          {errors.purpose && errors.purpose.type === "required" && (
            <div className={styles.alert}>Required</div>
          )}
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
