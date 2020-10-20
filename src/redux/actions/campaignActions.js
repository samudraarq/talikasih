import axios from "axios";
import { SET_LOADING, GET_NEW_CAMPAIGNS } from "./actionTypes";

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
