import React, { useState } from "react";
import styles from "./CampaignDetailsDonateComentFrom.module.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import qs from "qs";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getDonorDataComent } from "../../../redux/actions/donorActions";

const CampaignDetailsDonateComentFrom = ({
  userdata,
  jumlahkomen,
  getDonorDataComent,
  campaignId,
}) => {
  const [text, setText] = useState("");

  let { idDonate } = useParams();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    let dataqs = qs.stringify({
      content: text,
    });
    console.log(data);
    let token = userdata.token;
    let config = {
      method: "post",
      url: `https://warm-tundra-23736.herokuapp.com/comment/add/${idDonate}`,
      headers: {
        token: token,
      },
      data: dataqs,
    };

    axios(config)
      .then(function (response) {
        getDonorDataComent(campaignId);
        setText("");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <h1>Comments ({jumlahkomen.length})</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea
            name="comment"
            ref={register({ required: true, minLength: 4, maxLength: 240 })}
            placeholder="Give them support.."
            onChange={handleChange}
            value={text}
          ></textarea>
          {errors.comment && (
            <span>
              This field has minimum of 4 and maximum of 240 characters
            </span>
          )}
          <div className={styles.btnwraper}>
            <button className={styles.btnpost}>POST</button>
          </div>
        </form>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  userdata: state.auth,
  jumlahkomen: state.dataDonorAll?.dataDonateComen,
  campaignId: state.dataDonorAll?.dataDonate.id,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getDonorDataComent: (idDonate) => dispatch(getDonorDataComent(idDonate)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignDetailsDonateComentFrom);
