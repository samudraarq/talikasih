import React from "react";
import styles from "./CampaignDetailsDonateComentFrom.module.css";
import { useForm } from "react-hook-form";
import axios from 'axios'
import qs from 'qs'
import { useParams } from "react-router-dom";
export const CampaignDetailsDonateComentFrom = () => {
    let { idDonate } = useParams();
    const { register, handleSubmit, errors } = useForm();
 


    const onSubmit = (data)=> {
      let dataqs = qs.stringify({
        'content': data.comment 
       });
      console.log(data)
        let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsIm5hbWUiOiJhbmpheWxhaCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjAzNDU4NjcyfQ.7ioPqnX60T1vi9gw8tUyX6J7VyGq5v3l7SPqRWyQgi0';
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
          console.log(data.comment)
         alert('sukses')

        })
        .catch(function (error) {
        console.log(error);
        });
    }

    
    

  return (
    <div className={styles.container}>
      <h1>Comments (11)</h1>
       <form onSubmit={handleSubmit(onSubmit)}>
        <textarea name="comment" ref={register({ required: true , minLength: 4 , maxLength: 240 })} >Hello there, this is some text in a text area</textarea>
        {errors.comment && <span>This field has minimum of 4 and maximum of 240 characters</span>}
        <div className={styles.btnwraper}>
          <button className={styles.btnpost}>POST</button>
        </div>
      </form>
    </div>
  );
};
