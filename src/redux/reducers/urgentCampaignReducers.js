import {
  SET_LOADING_URGENT,
  GET_URGENT_CAMPAIGNS,
} from "../actions/actionTypes";

const initialState = {
  documents: [],
  loading: false,
};

export default function newCampaignReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING_URGENT:
      return { ...state, loading: !state.loading };
    case GET_URGENT_CAMPAIGNS:
      return {
        ...state,
        documents: action.posts,
      };
    default:
      return state;
  }
}
