import axios from 'axios'
import {GET_DONOR_DATA} from './actionTypes'
import {GET_DONOR_COMENT} from './actionTypes'
import {POST_SHARE} from './actionTypes'



export const  getDonorData =(idDonate)=>{
    return (dispatch)=>{
       
         axios(`https://warm-tundra-23736.herokuapp.com/campaign/${idDonate}`)
        .then(function (response) {
            dispatch({type:GET_DONOR_DATA,data:response.data.found})      
        })
        .catch(function (error) {
        console.log(error);
        });
    }
}


export const  getDonorDataComent =(idDonate)=>{
    return (dispatch)=>{
         axios(`https://warm-tundra-23736.herokuapp.com/comment/${idDonate}`)
        .then(function (response) {
            dispatch({type:GET_DONOR_COMENT,data:response.data.comments})

        })
        .catch(function (error) {
        console.log(error);
        });
    }
}

export const  postShare =(idDonate)=>{
    return (dispatch)=>{
         axios.post(`https://warm-tundra-23736.herokuapp.com/discover/share/${idDonate}`)
        .then(function (response) {
            dispatch({type:POST_SHARE,data:response.data})

        })
        .catch(function (error) {
        console.log(error);
        });
    }
}

