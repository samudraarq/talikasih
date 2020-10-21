import {
  SET_LOADING_CATEGORY,
  GET_CATEGORY_CAMPAIGNS,
} from "../actions/actionTypes";

const initialState = {
  documents: [],
  loading: false,
  status: "",
  totalPages: 1,
  onPage: 1,
};

export default function newCampaignReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING_CATEGORY:
      return { ...state, loading: !state.loading };
    case GET_CATEGORY_CAMPAIGNS:
      return {
        ...state,
        documents: action.posts.document,
        status: action.status,
        totalPages: action.posts.total_pages,
        onPage: action.posts.on_page,
      };
    default:
      return state;
  }
}
