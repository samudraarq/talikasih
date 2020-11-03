import axios from "axios";
import {
  GET_DONOR_DATA,
  GET_RELATED_CAMPAIGNS,
  RELATED_CAMPAIGNS_LOAD,
} from "./actionTypes";
import { GET_DONOR_COMENT } from "./actionTypes";
import { POST_SHARE } from "./actionTypes";
import { GET_DONATION_DATA } from "./actionTypes";
import { GET_DONATION_STORY } from "./actionTypes";
import { GET_DONATION_STORY_LOAD_MORE } from "./actionTypes";



export const getDonorData = (idDonate) => {
  return (dispatch) => {
    axios(`https://warm-tundra-23736.herokuapp.com/campaign/${idDonate}`)
      .then(function (response) {
        dispatch({ type: GET_DONOR_DATA, data: response.data.found });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const getDonorDataComent = (idDonate) => {
  return (dispatch) => {
    axios(`https://warm-tundra-23736.herokuapp.com/comment/${idDonate}`)
      .then(function (response) {
        dispatch({ type: GET_DONOR_COMENT, data: response.data.comments });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const getDonorDataDonante = (idDonate) => {
  return (dispatch) => {
    axios(`https://warm-tundra-23736.herokuapp.com/donate/campaign/${idDonate}`)
      .then(function (response) {
        dispatch({ type: GET_DONATION_DATA, data: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const getDonationStory = (idDonate) => {
  return (dispatch) => {
    axios(
      `https://warm-tundra-23736.herokuapp.com/campaignLog/desc/${idDonate}/1`
    )
      .then(function (response) {
        dispatch({
          type: GET_DONATION_STORY,
          data: response.data.Campaign_Logs,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const getDonationStoryLoadMore = (idDonate, page) => {
  return (dispatch) => {
    axios(
      `https://warm-tundra-23736.herokuapp.com/campaignLog/desc/${idDonate}/${page}`
    )
      .then(function (response) {
        dispatch({
          type: GET_DONATION_STORY_LOAD_MORE,
          data: response.data.Campaign_Logs,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const postShare = (idDonate) => {
  return (dispatch) => {
    axios
      .post(
        `https://warm-tundra-23736.herokuapp.com/discover/share/${idDonate}`
      )
      .then(function (response) {
        dispatch({ type: POST_SHARE, data: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const getRelatedCampaigns = (categoryId) => {
  return (dispatch) => {
    dispatch({
      type: RELATED_CAMPAIGNS_LOAD,
    });
    // dispatch({
    //   type: SET_ERROR_CATEGORY_FALSE,
    // });
    axios
      .get(
        `https://warm-tundra-23736.herokuapp.com/discover/category/${categoryId}/1`
      )
      .then((response) => {
        if (response.data.success === false) {
          //   dispatch({
          //     type: SET_ERROR_CATEGORY,
          //     errorMsg: response.data.message,
          //   });
        } else {
          dispatch({
            type: GET_RELATED_CAMPAIGNS,
            posts: response.data.document.slice(0, 3),
            status: "Done",
          });
        }
        dispatch({
          type: RELATED_CAMPAIGNS_LOAD,
        });
      })
      .catch((err) => {
        console.log(err);
        // dispatch({
        //   type: SET_LOADING_CATEGORY,
        // });
      });
  };
};


