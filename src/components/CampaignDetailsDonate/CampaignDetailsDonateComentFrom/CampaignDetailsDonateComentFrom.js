import React from "react";
import styles from "./CampaignDetailsDonateComentFrom.module.css";
import { useForm } from "react-hook-form";
import axios from 'axios'
import qs from 'qs'
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
 const CampaignDetailsDonateComentFrom = ({userdata ,jumlahkomen}) => {
    let { idDonate } = useParams();
    const { register, handleSubmit, errors } = useForm();
 


    const onSubmit = (data)=> {
      let dataqs = qs.stringify({
        'content': data.comment 
       });
      console.log(data)
        let token = userdata.token;
        let config = {
            method: 'post',
            url: `https://warm-tundra-23736.herokuapp.com/comment/add/${idDonate}`,
            headers: { 
              'token': token, 
            },
            data : dataqs
          };

        axios(config)
        .then(function (response) {
          // console.log(data.comment)
         alert('sukses')

        })
        .catch(function (error) {
        console.log(error);
        });
    }

    
    

  return (
    <div className={styles.body}>
    <div className={styles.container}>
      <h1>Comments ({jumlahkomen.length})</h1>
       <form onSubmit={handleSubmit(onSubmit)}>
        <textarea name="comment" ref={register({ required: true , minLength: 4 , maxLength: 240 })} placeholder="Comment Here"></textarea>
        {errors.comment && <span>This field has minimum of 4 and maximum of 240 characters</span>}
        <div className={styles.btnwraper}>
          <button className={styles.btnpost}>POST</button>
        </div>
      </form>
    </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  userdata:state.auth,
  jumlahkomen:state.dataDonorAll?.dataDonateComen
});

export default connect(mapStateToProps, null)(CampaignDetailsDonateComentFrom);
