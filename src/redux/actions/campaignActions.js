import axios from "axios";
import {
  SET_LOADING,
  GET_NEW_CAMPAIGNS,
  SET_LOADING_TRENDING,
  GET_POPULAR_CAMPAIGNS,
} from "./actionTypes";

export const getNewCampaigns = (page) => {
  return (dispatch) => {
    dispatch({
      type: SET_LOADING,
    });
    axios
      .get(`https://warm-tundra-23736.herokuapp.com/discover/all/${page}`)
      .then((response) => {
        dispatch({
          type: GET_NEW_CAMPAIGNS,
          posts: response.data,
          status: "Done",
        });
        dispatch({
          type: SET_LOADING,
        });
      });
  };
};

export const getPopularCampaigns = (page) => {
  return (dispatch) => {
    dispatch({
      type: SET_LOADING_TRENDING,
    });
    axios
      .get(`https://warm-tundra-23736.herokuapp.com/campaign/popular/${page}`)
      .then((response) => {
        dispatch({
          type: GET_POPULAR_CAMPAIGNS,
          posts: response.data,
          status: "Done",
        });
        dispatch({
          type: SET_LOADING_TRENDING,
        });
      });
  };
};
