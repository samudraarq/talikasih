import axios from "axios";
import {
  SET_LOADING_NEW,
  GET_NEW_CAMPAIGNS,
  SET_LOADING_TRENDING,
  GET_TRENDING_CAMPAIGN,
  SET_LOADING_POPULAR,
  GET_POPULAR_CAMPAIGNS,
  SET_LOADING_URGENT,
  GET_URGENT_CAMPAIGNS,
  SET_LOADING_CATEGORY,
  GET_CATEGORY_CAMPAIGNS,
  SET_LOADING_SEARCH,
  GET_SEARCH_CAMPAIGNS,
  GET_SEARCH_POPULAR,
  GET_SEARCH_URGENT,
  GET_SEARCH_LESSDONATE,
} from "./actionTypes";

export const getNewCampaigns = (page) => {
  return (dispatch) => {
    dispatch({
      type: SET_LOADING_NEW,
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
          type: SET_LOADING_NEW,
        });
      });
  };
};

export const getTrendingCampaign = () => {
  return (dispatch) => {
    dispatch({
      type: SET_LOADING_TRENDING,
    });
    axios
      .get(`https://warm-tundra-23736.herokuapp.com/discover/trending`)
      .then((response) => {
        dispatch({
          type: GET_TRENDING_CAMPAIGN,
          posts: response.data,
          status: "Done",
        });
        dispatch({
          type: SET_LOADING_TRENDING,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: SET_LOADING_TRENDING,
        });
      });
  };
};

export const getPopularCampaigns = (page) => {
  return (dispatch) => {
    dispatch({
      type: SET_LOADING_POPULAR,
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
          type: SET_LOADING_POPULAR,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: SET_LOADING_POPULAR,
        });
      });
  };
};

export const getUrgentCampaigns = () => {
  return (dispatch) => {
    dispatch({
      type: SET_LOADING_URGENT,
    });
    axios
      .get(`https://warm-tundra-23736.herokuapp.com/campaign/urgent/`)
      .then((response) => {
        dispatch({
          type: GET_URGENT_CAMPAIGNS,
          posts: response.data,
          status: "Done",
        });
        dispatch({
          type: SET_LOADING_URGENT,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: SET_LOADING_URGENT,
        });
      });
  };
};

export const getCategoryCampaigns = (page, categoryId) => {
  return (dispatch) => {
    dispatch({
      type: SET_LOADING_CATEGORY,
    });
    axios
      .get(
        `https://warm-tundra-23736.herokuapp.com/discover/category/${categoryId}/${page}`
      )
      .then((response) => {
        dispatch({
          type: GET_CATEGORY_CAMPAIGNS,
          posts: response.data,
          status: "Done",
        });
        dispatch({
          type: SET_LOADING_CATEGORY,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: SET_LOADING_CATEGORY,
        });
      });
  };
};

export const getSearchCampaign = (page, searchTerms) => {
  return (dispatch) => {
    dispatch({
      type: SET_LOADING_SEARCH,
    });
    axios
      .get(
        `https://warm-tundra-23736.herokuapp.com/discover/search/${searchTerms}/${page}`
      )
      .then((response) => {
        dispatch({
          type: GET_SEARCH_CAMPAIGNS,
          posts: response.data,
          status: "Done",
        });
        dispatch({
          type: SET_LOADING_SEARCH,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: SET_LOADING_SEARCH,
        });
      });
  };
};

export const getSearchPopular = (page, searchTerms) => {
  return (dispatch) => {
    dispatch({
      type: SET_LOADING_SEARCH,
    });
    axios
      .get(
        `https://warm-tundra-23736.herokuapp.com/campaign/search/popular/${searchTerms}/${page}`
      )
      .then((response) => {
        dispatch({
          type: GET_SEARCH_POPULAR,
          posts: response.data,
          status: "Done",
        });
        dispatch({
          type: SET_LOADING_SEARCH,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: SET_LOADING_SEARCH,
        });
      });
  };
};

export const getSearchUrgent = (page, searchTerms) => {
  return (dispatch) => {
    dispatch({
      type: SET_LOADING_SEARCH,
    });
    axios
      .get(
        `https://warm-tundra-23736.herokuapp.com/campaign/search/urgent/${searchTerms}/${page}`
      )
      .then((response) => {
        dispatch({
          type: GET_SEARCH_URGENT,
          posts: response.data,
          status: "Done",
        });
        dispatch({
          type: SET_LOADING_SEARCH,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: SET_LOADING_SEARCH,
        });
      });
  };
};

export const getSearchLessdonate = (page, searchTerms) => {
  return (dispatch) => {
    dispatch({
      type: SET_LOADING_SEARCH,
    });
    axios
      .get(
        `https://warm-tundra-23736.herokuapp.com/campaign/search/lessdonate/${searchTerms}/${page}`
      )
      .then((response) => {
        dispatch({
          type: GET_SEARCH_LESSDONATE,
          posts: response.data,
          status: "Done",
        });
        dispatch({
          type: SET_LOADING_SEARCH,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: SET_LOADING_SEARCH,
        });
      });
  };
};
