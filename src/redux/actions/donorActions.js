import axios from 'axios'
import {GET_DONOR_DATA} from './actionTypes'
import {GET_DONOR_COMENT} from './actionTypes'
import {POST_SHARE} from './actionTypes'
import {GET_DONATION_DATA} from './actionTypes'
import {GET_DONATION_STORY} from './actionTypes'
import {GET_DONATION_STORY_LOAD_MORE} from './actionTypes'
import {GET_USER_DATA} from './actionTypes'



export const  getUserData =(idDonate)=>{
    return (dispatch)=>{
       
         axios(`https://warm-tundra-23736.herokuapp.com/campaign/${idDonate}`)
        .then(function (response) {
            dispatch({type:GET_USER_DATA,data:response.data.found})      
        })
        .catch(function (error) {
        console.log(error);
        });
    }
}

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


export const  getDonorDataDonante =(idDonate)=>{
    return (dispatch)=>{
         axios(`https://warm-tundra-23736.herokuapp.com/donate/campaign/${idDonate}`)
        .then(function (response) {
            dispatch({type:GET_DONATION_DATA,data:response.data})

        })
        .catch(function (error) {
        console.log(error);
        });
    }
}

export const  getDonationStory =(idDonate)=>{
    return (dispatch)=>{
         axios(`https://warm-tundra-23736.herokuapp.com/campaignLog/desc/${idDonate}/1`)
        .then(function (response) {
            dispatch({type:GET_DONATION_STORY,data:response.data.Campaign_Logs})

        })
        .catch(function (error) {
        console.log(error);
        });
    }
}


export const  getDonationStoryLoadMore =(idDonate ,page)=>{
    return (dispatch)=>{
         axios(`https://warm-tundra-23736.herokuapp.com/campaignLog/desc/${idDonate}/${page}`)
        .then(function (response) {
            dispatch({type:GET_DONATION_STORY_LOAD_MORE,data:response.data.Campaign_Logs})

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


