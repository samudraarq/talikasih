import {
  SET_LOADING_SEARCH,
  GET_SEARCH_CAMPAIGNS,
} from "../actions/actionTypes";

const initialState = {
  documents: [],
  loading: false,
  totalPages: 1,
  onPage: 1,
};

export default function newCampaignReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING_SEARCH:
      return { ...state, loading: !state.loading };
    case GET_SEARCH_CAMPAIGNS:
      return {
        ...state,
        documents: action.posts.document,
        totalPages: action.posts.total_pages,
        onPage: action.posts.on_page,
      };
    default:
      return state;
  }
}
