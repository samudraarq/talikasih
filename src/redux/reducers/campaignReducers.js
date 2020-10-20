import {
  SET_LOADING,
  GET_NEW_CAMPAIGNS,
  SET_LOADING_TRENDING,
  GET_POPULAR_CAMPAIGNS,
} from "../actions/actionTypes";

const initialState = {
  documents: [],
  trendingCampaigns: [],
  loading: false,
  loadingTrending: false,
  status: "",
  totalPages: 1,
  onPage: 1,
};

export default function campaignReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: !state.loading };
    case SET_LOADING_TRENDING:
      return { ...state, loadingTrending: !state.loadingTrending };
    case GET_NEW_CAMPAIGNS:
      return {
        ...state,
        documents: action.posts.document,
        status: action.status,
        totalPages: action.posts.total_pages,
        onPage: action.posts.on_page,
      };
    case GET_POPULAR_CAMPAIGNS:
      return {
        ...state,
        trendingCampaigns: action.posts.ranked[0],
        status: action.status,
      };
    default:
      return state;
  }
}
