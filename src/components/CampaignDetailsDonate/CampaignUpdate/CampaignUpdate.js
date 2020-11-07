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

function CampaignUpdate({ auth, requestClose, dataDonorAll }) {
  // FORM //
  const [openAmount, setOpenAmount] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  let history = useHistory();
  const [quillError, setQuillError] = useState(false);

  const onSubmit = async (data) => {
    const inputText = quill.root.innerHTML;
    const dateToday = new Date();
    const campaignId = dataDonorAll.dataDonate.id;

    if (quill.getText().trim().length === 0) {
      setQuillError(true);
    } else {
      setQuillError(false);
      try {
        const { ammount } = data;
        const updateInfo = qs.stringify({
          ammount: ammount || "",
          content: inputText,
          date: dateToday,
          StatusId: openAmount ? 1 : 2,
        });
        console.log(updateInfo);
        const response = await axios({
          method: "post",
          url: `https://warm-tundra-23736.herokuapp.com/campaignLog/${campaignId}`,
          data: updateInfo,
          headers: {
            token: auth.token,
          },
        });
        console.log(response.data);
        history.push(`/campaign/details/donate/${dataDonorAll.dataDonate.id}`);
        requestClose();
      } catch (error) {
        console.log(error, "error");
      }
    }
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
      // "image",
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
              type="number"
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
              width: "100%",
              border: "none",
              backgroundColor: "#FCFCFC",
            }}
          />
          {quillError && <div className={styles.alert}>Required</div>}
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
    dataDonorAll: state.dataDonorAll,
  };
};

export default connect(mapStateToProps)(CampaignUpdate);
