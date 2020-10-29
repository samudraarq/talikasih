import {
  SET_LOADING_POPULAR,
  GET_POPULAR_CAMPAIGNS,
} from "../actions/actionTypes";

const initialState = {
  documents: [],
  loading: false,
  status: "",
  totalPages: 1,
  onPage: 1,
};

export default function popularCampaignReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING_POPULAR:
      return { ...state, loading: !state.loading };
    case GET_POPULAR_CAMPAIGNS:
      return {
        ...state,
        documents: action.posts.ranked,
        status: action.status,
        totalPages: action.posts.total_pages,
        onPage: action.posts.on_page,
      };
    default:
      return state;
  }
}
