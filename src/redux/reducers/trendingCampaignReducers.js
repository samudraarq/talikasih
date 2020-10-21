import {
  SET_LOADING_TRENDING,
  GET_TRENDING_CAMPAIGN,
} from "../actions/actionTypes";

const initialState = {
  documents: {},
  loading: false,
};

export default function popularCampaignReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING_TRENDING:
      return { ...state, loading: !state.loading };
    case GET_TRENDING_CAMPAIGN:
      return {
        ...state,
        documents: action.posts,
      };
    default:
      return state;
  }
}
